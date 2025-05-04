const googleService = require('../services/googleService');

async function copySheetController(req, res) {
    if (!req.user || !req.user.accessToken) {
        return res.status(401).json({ message: 'Authentication required or access token missing.' });
    }

    const { sourceSheetId, newSheetName } = req.body;
    const accessToken = req.user.accessToken;

    if (!sourceSheetId) {
        return res.status(400).json({ message: 'Missing required field: sourceSheetId' });
    }

    try {
        console.log(`Controller: Request received to copy sheet ${sourceSheetId}`);
        const copiedSheetData = await googleService.copySheet(accessToken, sourceSheetId, newSheetName);
        res.status(201).json({
            message: 'Sheet copied successfully!',
            newSheet: copiedSheetData
        });
    } catch (error) {
        console.error('Controller Error: Failed to copy sheet:', error.message);
        res.status(500).json({ message: 'Failed to copy the Google Sheet.', error: error.message });
    }
}

/**
 * Controller to handle uploading a spreadsheet file to Google Drive.
 */
async function uploadSpreadsheetController(req, res) {
    // Check if user is authenticated and has an access token
    if (!req.user || !req.user.accessToken) {
        return res.status(401).json({ message: 'Authentication required or access token missing.' });
    }

    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded. Please upload a spreadsheet file.' });
    }

    // Get optional custom file name from the request
    const { fileName } = req.body;
    const accessToken = req.user.accessToken;

    try {
        console.log(`Controller: Request received to upload spreadsheet ${req.file.originalname}`);
        
        // Call the service to upload the file to Google Drive and make it public
        const uploadedFileData = await googleService.uploadSpreadsheet(accessToken, req.file, fileName, true);

        // Get the n8n webhook URL from environment variables or use the fixed URL
        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'https://shivam02020.app.n8n.cloud/webhook-test/0abe2d8f-0510-49d9-928e-d29d8d49291f';

        // Ensure we have the public URL
        const publicUrl = uploadedFileData.publicUrl || `https://docs.google.com/spreadsheets/d/${uploadedFileData.id}/edit?usp=sharing`;
        
        // Automatically send the spreadsheet ID to the n8n webhook
        try {
            console.log(`Automatically forwarding spreadsheet ID ${uploadedFileData.id} to n8n webhook...`);
            
            const result = await googleService.sendToN8n(
                uploadedFileData.id, 
                n8nWebhookUrl,
                {
                    fileName: uploadedFileData.name,
                    webViewLink: uploadedFileData.webViewLink,
                    publicUrl: publicUrl, // Send the public URL explicitly
                    uploadedBy: req.user.email || req.user.displayName,
                    sourceFile: req.file.originalname,
                    isPublic: uploadedFileData.isPublic === true ? "true" : "false"
                }
            );
            
            console.log('Successfully sent to n8n webhook!');
            
            // Return success response with both the uploaded file details and n8n forwarding result
            return res.status(201).json({
                message: 'Spreadsheet uploaded and automatically sent to n8n workflow!',
                spreadsheet: uploadedFileData,
                n8nForwarding: {
                    success: true,
                    webhookUrl: n8nWebhookUrl,
                    result: result
                }
            });
            
        } catch (webhookError) {
            console.error('Failed to send to n8n webhook:', webhookError.message);
            
            // If the webhook call fails, we still want to report success on the upload
            // but include information about the webhook failure
            return res.status(201).json({
                message: 'Spreadsheet uploaded successfully, but failed to send to n8n workflow.',
                spreadsheet: uploadedFileData,
                n8nForwarding: {
                    success: false,
                    webhookUrl: n8nWebhookUrl,
                    error: webhookError.message
                }
            });
        }
    } catch (error) {
        console.error('Controller Error: Failed to upload spreadsheet:', error.message);
        res.status(500).json({ message: 'Failed to upload spreadsheet to Google Drive.', error: error.message });
    }
}

/**
 * Controller to handle sending spreadsheet ID to n8n for multi-agent AI processing.
 */
async function sendToN8nController(req, res) {
    // Check if user is authenticated and has an access token
    if (!req.user || !req.user.accessToken) {
        return res.status(401).json({ message: 'Authentication required or access token missing.' });
    }

    // Get spreadsheet ID and n8n webhook URL from the request
    const { spreadsheetId, n8nWebhookUrl, metadata } = req.body;

    if (!spreadsheetId) {
        return res.status(400).json({ message: 'Missing required field: spreadsheetId' });
    }

    if (!n8nWebhookUrl) {
        return res.status(400).json({ message: 'Missing required field: n8nWebhookUrl' });
    }

    try {
        console.log(`Controller: Request received to send spreadsheet ${spreadsheetId} to n8n workflow`);
        
        // Call the service to send the data to n8n
        const result = await googleService.sendToN8n(spreadsheetId, n8nWebhookUrl, metadata);

        // Return success response
        res.status(200).json({
            message: 'Spreadsheet ID successfully sent to n8n workflow!',
            result
        });
    } catch (error) {
        console.error('Controller Error: Failed to send to n8n:', error.message);
        res.status(500).json({ message: 'Failed to send spreadsheet ID to n8n workflow.', error: error.message });
    }
}

module.exports = {
    copySheetController,
    uploadSpreadsheetController,
    sendToN8nController
};
