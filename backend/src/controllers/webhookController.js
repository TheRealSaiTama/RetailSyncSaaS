const googleService = require('../services/googleService');

async function getSheetDataWebhook(req, res) {
    const { spreadsheetId, range, webhookToken } = req.query;
    const expectedToken = process.env.WEBHOOK_TOKEN;
    if (!webhookToken || webhookToken !== expectedToken) {
        return res.status(401).json({ error: 'Invalid webhook token' });
    }
    if (!spreadsheetId) {
        return res.status(400).json({ error: 'Missing required parameter: spreadsheetId' });
    }
    try {
        const clientId = process.env.GOOGLE_CLIENT_ID;
        const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
        const oauth2Client = new (require('google-auth-library').OAuth2Client)(
            clientId, clientSecret, process.env.GOOGLE_CALLBACK_URL
        );
        const token = await oauth2Client.getAccessToken();
        const accessToken = token.token;
        const sheetData = await googleService.readSheet(
            accessToken,
            spreadsheetId,
            range || 'Sheet1'
        );
        if (sheetData.length < 1) {
            return res.status(200).json({ data: [] });
        }
        const headers = sheetData[0];
        const rows = sheetData.slice(1).map(row => {
            const obj = {};
            headers.forEach((header, index) => {
                obj[header] = row[index] || null;
            });
            return obj;
        });
        res.status(200).json({
            sheetId: spreadsheetId,
            range: range || 'Sheet1',
            rowCount: rows.length,
            data: rows
        });
    } catch (error) {
        console.error('Webhook Error:', error.message);
        res.status(500).json({ error: 'Failed to read Google Sheet', message: error.message });
    }
}

/**
 * Handles incoming POST requests from n8n HTTP Request nodes.
 * Logs the received data.
 */
async function handleN8nWebhook(req, res) {
    console.log('Received n8n webhook data:');
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);

    // You can add logic here to process the data, store it, etc.
    // For example, you might want to validate a secret token:
    // const n8nToken = req.headers['x-n8n-token']; // Or however you configure n8n to send it
    // if (!n8nToken || n8nToken !== process.env.N8N_SECRET_TOKEN) {
    //     console.warn('Invalid or missing n8n token received.');
    //     return res.status(401).json({ error: 'Unauthorized' });
    // }

    // Send a success response back to n8n
    res.status(200).json({ message: 'Webhook received successfully' });
}

module.exports = {
    getSheetDataWebhook,
    handleN8nWebhook, // Add the new handler here
};
