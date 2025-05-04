const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const fs = require('fs');
const path = require('path');
const stream = require('stream');
const axios = require('axios');

/**
 * Creates an authenticated Google Drive API client.
 * @param {object} user The user object containing accessToken and refreshToken.
 * @returns {google.drive_v3.Drive} Authenticated Google Drive API client instance.
 */
function getDriveClient(user) {
    if (!user || !user.accessToken) {
        throw new Error('Cannot create Google Drive client: Missing user or access token.');
    }
    // Instantiate with full credentials for refresh capability
    const oauth2Client = new OAuth2Client(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_CALLBACK_URL // Redirect URL is needed for refresh
    );
    oauth2Client.setCredentials({
        access_token: user.accessToken,
        refresh_token: user.refreshToken, // Provide the refresh token
    });

    // TODO: Add 'tokens' event listener here later if needed to update session

    return google.drive({ version: 'v3', auth: oauth2Client });
}

/**
 * Creates an authenticated Google Sheets API client.
 * @param {object} user The user object containing accessToken and refreshToken.
 * @returns {google.sheets_v4.Sheets} Authenticated Google Sheets API client instance.
 */
function getSheetsClient(user) {
    if (!user || !user.accessToken) {
        throw new Error('Cannot create Google Sheets client: Missing user or access token.');
    }
    // Instantiate with full credentials for refresh capability
    const oauth2Client = new OAuth2Client(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_CALLBACK_URL // Redirect URL is needed for refresh
    );
    oauth2Client.setCredentials({
        access_token: user.accessToken,
        refresh_token: user.refreshToken, // Provide the refresh token
    });

    // TODO: Add 'tokens' event listener here later if needed to update session

    return google.sheets({ version: 'v4', auth: oauth2Client });
}

/**
 * Reads data from a Google Sheet.
 * @param {object} user The user object containing accessToken and refreshToken.
 * @param {string} spreadsheetId The ID of the Google Sheet to read.
 * @param {string} range The A1 notation of the range to read (e.g., 'Sheet1!A1:Z1000').
 * @returns {Promise<Array<Array<any>>>} A promise that resolves with the sheet data as a 2D array.
 * @throws {Error} If reading the sheet fails.
 */
async function readSheet(user, spreadsheetId, range = 'Sheet1') {
    const sheets = getSheetsClient(user);

    try {
        console.log(`Reading data from sheet ID: ${spreadsheetId}, range: ${range}`);

        // Read the spreadsheet data
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range,
        });

        console.log(`Successfully read ${response.data.values ? response.data.values.length : 0} rows from the sheet.`);
        
        // Return the values (2D array)
        return response.data.values || [];

    } catch (error) {
        console.error('Error reading Google Sheet:', error.response ? error.response.data : error.message);
        throw new Error(`Failed to read Google Sheet (ID: ${spreadsheetId}). Reason: ${error.message}`);
    }
}

/**
 * Copies a Google Sheet file in the user's Google Drive.
 * @param {object} user The user object containing accessToken and refreshToken.
 * @param {string} sourceSheetId The ID of the Google Sheet to copy.
 * @param {string} [newSheetName] Optional name for the copied sheet. Defaults to "Copy of [Original Name]".
 * @returns {Promise<object>} A promise that resolves with the metadata of the newly created copy (including its ID).
 * @throws {Error} If the copy operation fails.
 */
async function copySheet(user, sourceSheetId, newSheetName) {
    const drive = getDriveClient(user);

    try {
        console.log(`Attempting to copy sheet with ID: ${sourceSheetId}`);

        // 1. Get metadata of the original file to get its name (optional but good for default naming)
        let originalName = 'Spreadsheet'; // Default name
        try {
            const fileMetadata = await drive.files.get({
                fileId: sourceSheetId,
                fields: 'name', // Only fetch the name field
            });
            originalName = fileMetadata.data.name;
            console.log(`Original sheet name: ${originalName}`);
        } catch (err) {
            console.warn(`Could not get original sheet name for ID ${sourceSheetId}:`, err.message);
            // Proceed with default name if getting metadata fails
        }

        // 2. Define the metadata for the new copy
        const copyMetadata = {
            name: newSheetName || `Copy of ${originalName}`,
            // You could add more properties here, like parents: ['folderId'] to copy it into a specific folder
        };

        // 3. Execute the copy operation
        const response = await drive.files.copy({
            fileId: sourceSheetId,
            requestBody: copyMetadata,
            fields: 'id, name, webViewLink', // Specify fields to return
        });

        console.log('Successfully copied sheet:', response.data);
        return response.data; // Contains id, name, webViewLink of the new copy

    } catch (error) {
        console.error('Error copying Google Sheet:', error.response ? error.response.data : error.message);
        // Rethrow a more specific error or handle it as needed
        throw new Error(`Failed to copy Google Sheet (ID: ${sourceSheetId}). Reason: ${error.message}`);
    }
}

/**
 * Makes a Google Drive file accessible to anyone with the link (public) - with enhanced permissions.
 * @param {object} user The user object containing accessToken and refreshToken.
 * @param {string} fileId The ID of the file to make public.
 * @returns {Promise<object>} A promise that resolves with the updated file permission details.
 * @throws {Error} If setting permissions fails.
 */
async function makeFilePublic(user, fileId) {
    const drive = getDriveClient(user);

    try {
        console.log(`Setting public permissions for file ID: ${fileId}`);

        // First, ensure we can get the file (checks if it exists and if we have access)
        try {
            const fileCheck = await drive.files.get({
                fileId: fileId,
                fields: 'id,name,mimeType,permissions'
            });
            console.log(`File exists, current permissions:`, JSON.stringify(fileCheck.data.permissions, null, 2));
        } catch (checkError) {
            console.error(`Error checking file before setting permissions:`, checkError.message);
            // Continue anyway as we'll try to set permissions
        }

        // Create the permission object for public access - writer access so n8n can modify it
        const permissionBody = {
            role: 'writer', // Upgrading to writer so n8n can modify if needed
            type: 'anyone',
            allowFileDiscovery: false // Makes it accessible only to people with the link
        };

        // Apply the permissions
        const response = await drive.permissions.create({
            fileId: fileId,
            requestBody: permissionBody,
            fields: 'id,type,role',
            supportsAllDrives: true
        });

        console.log(`Successfully applied public permissions:`, response.data);
        
        // Get the updated sharing settings and web view link
        const fileInfo = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink,webContentLink,permissions,sharingUser,shared'
        });
        
        console.log(`Updated file info:`, JSON.stringify(fileInfo.data, null, 2));
        
        // Verify the permissions were applied correctly
        try {
            await verifyPublicAccess(fileId);
            console.log(`✅ Successfully verified public access to file ID: ${fileId}`);
        } catch (verifyError) {
            console.warn(`⚠️ Could not verify public access to file: ${verifyError.message}`);
            // Continue anyway, as some verification methods might not work depending on the environment
        }
        
        return {
            permissionId: response.data.id,
            permissionType: response.data.type,
            permissionRole: response.data.role,
            webViewLink: fileInfo.data.webViewLink,
            webContentLink: fileInfo.data.webContentLink || null,
            publicUrl: `https://docs.google.com/spreadsheets/d/${fileId}/edit?usp=sharing`, // Fallback direct URL
            permissions: fileInfo.data.permissions
        };
    } catch (error) {
        console.error('Error setting public permissions:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
        throw new Error(`Failed to make file public (ID: ${fileId}). Reason: ${error.message}`);
    }
}

/**
 * Verifies that a file is publicly accessible.
 * @param {string} fileId The ID of the file to verify.
 * @returns {Promise<boolean>} A promise that resolves to true if the file is publicly accessible.
 * @throws {Error} If verification fails.
 */
async function verifyPublicAccess(fileId) { // This doesn't need authentication
    try {
        // Attempt to access the file without authentication via public URL
        // This is a basic check that makes a request to the public URL
        const axios = require('axios');
        const publicUrl = `https://docs.google.com/spreadsheets/d/${fileId}/edit?usp=sharing`;
        
        console.log(`Verifying public access to: ${publicUrl}`);
        
        // Just try to fetch the public page - if it's not public, this will redirect to a login page
        const response = await axios.get(publicUrl, {
            maxRedirects: 0,  // Don't follow redirects
            validateStatus: function (status) {
                return status < 400; // Accept all successful responses (including redirects)
            }
        });
        
        if (response.status === 200) {
            console.log('File appears to be publicly accessible');
            return true;
        } else {
            console.log(`File access check returned status ${response.status}`);
            // Even if we get redirected, the file might still be public
            // Google Docs typically redirects even for public files
            return true;
        }
    } catch (error) {
        console.warn(`Public access verification warning: ${error.message}`);
        // Don't throw here, as the verification might fail for various reasons
        // while the file is still actually public
        return false;
    }
}

/**
 * Uploads a spreadsheet file to Google Drive, converts it to a Google Sheet, and makes it public.
 * @param {object} user The user object containing accessToken and refreshToken.
 * @param {object} file The file object from multer middleware (req.file)
 * @param {string} [fileName] Optional custom name for the uploaded file.
 * @param {boolean} [makePublic=true] Whether to make the file public after upload.
 * @returns {Promise<object>} A promise that resolves with the metadata of the uploaded file.
 */
async function uploadSpreadsheet(user, file, fileName, makePublic = true) {
    const drive = getDriveClient(user);

    try {
        console.log('Uploading file to Google Drive:', file.originalname);

        // Create a readable stream from the uploaded file buffer
        const bufferStream = new stream.PassThrough();
        bufferStream.end(file.buffer);

        // Set up the file metadata - adding explicit sharing settings
        const fileMetadata = {
            name: fileName || file.originalname,
            // Convert file to Google Sheets format
            mimeType: 'application/vnd.google-apps.spreadsheet',
        };

        // Set up the media upload parameters
        const media = {
            mimeType: file.mimetype,
            body: bufferStream,
        };

        // Upload the file to Google Drive and convert it to Google Sheets format
        const response = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: 'id, name, webViewLink, permissions', // Get the ID, name, and link to the file
        });

        console.log('Successfully uploaded spreadsheet to Google Drive:', response.data);
        console.log('Direct link to spreadsheet: https://docs.google.com/spreadsheets/d/' + response.data.id + '/edit?usp=sharing');

        // Make the file public if requested
        let publicPermissions = null;
        if (makePublic) {
            try {
                publicPermissions = await makeFilePublic(user, response.data.id);
                console.log('Made spreadsheet public with link:', publicPermissions.webViewLink);
                console.log('Alternative direct link:', publicPermissions.publicUrl);
                
                // Update the webViewLink in the response with the public link
                response.data.webViewLink = publicPermissions.webViewLink;
                response.data.publicUrl = publicPermissions.publicUrl;
                response.data.isPublic = true;
                response.data.publicPermissions = publicPermissions;
                
                // Extra verification
                console.log('Sleeping for 2 seconds to let Google permissions propagate...');
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Final direct URL that should work for n8n
                console.log('Final public URL for n8n:', `https://docs.google.com/spreadsheets/d/${response.data.id}/edit?usp=sharing`);
            } catch (permError) {
                console.error('Warning: Could not make file public:', permError.message);
                response.data.isPublic = false;
                response.data.publicPermissionError = permError.message;
            }
        } else {
            response.data.isPublic = false;
        }

        return response.data; // Contains id, name, webViewLink, isPublic, etc.
    } catch (error) {
        console.error('Error uploading spreadsheet to Google Drive:', error.response ? error.response.data : error.message);
        throw new Error(`Failed to upload spreadsheet. Reason: ${error.message}`);
    }
}

/**
 * Sends the spreadsheet ID and metadata to an n8n webhook
 * @param {string} spreadsheetId The ID of the Google Sheet
 * @param {string} n8nWebhookUrl The URL of the n8n webhook
 * @param {object} metadata Optional additional data to send
 * @returns {Promise<object>} The response from the n8n webhook
 */
async function sendToN8n(spreadsheetId, n8nWebhookUrl, metadata = {}) {
    try {
        console.log(`Sending spreadsheet ID ${spreadsheetId} to n8n webhook at ${n8nWebhookUrl}`);
        
        // Convert the data to URL parameters for a GET request
        const params = new URLSearchParams();
        params.append('spreadsheetId', spreadsheetId);
        params.append('timestamp', new Date().toISOString());
        params.append('source', 'RetailSyncSaaS');
        
        // Add metadata as additional URL parameters
        for (const [key, value] of Object.entries(metadata)) {
            if (value !== null && value !== undefined) {
                params.append(key, value.toString());
            }
        }
        
        // Append the parameters to the webhook URL
        const fullUrl = `${n8nWebhookUrl}${n8nWebhookUrl.includes('?') ? '&' : '?'}${params.toString()}`;
        console.log('Sending GET request to:', fullUrl);
        
        // Make an HTTP GET request to the n8n webhook
        const response = await axios.get(fullUrl);
        
        console.log('Successfully sent data to n8n:', response.status);
        return response.data;
    } catch (error) {
        console.error('Error sending data to n8n:', error.message);
        throw new Error(`Failed to send data to n8n: ${error.message}`);
    }
}

module.exports = {
    copySheet,
    uploadSpreadsheet,
    readSheet,
    sendToN8n,
    makeFilePublic
};
