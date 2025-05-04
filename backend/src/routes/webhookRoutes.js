const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

/**
 * GET /webhook/sheet
 * Returns the data from a Google Sheet specified by ID in the query parameters.
 * This endpoint is designed to be called by n8n or other automation tools.
 * Required query parameters:
 *   - spreadsheetId: The ID of the Google Sheet to read.
 *   - webhookToken: A security token that must match the WEBHOOK_TOKEN env variable.
 * Optional query parameters:
 *   - range: The A1 notation of the range to read (e.g., 'Sheet1!A1:Z1000'). Defaults to 'Sheet1'.
 */
router.get('/sheet', webhookController.getSheetDataWebhook);

/**
 * POST /webhook/n8n
 * Receives data pushed from an n8n HTTP Request node.
 */
router.post('/n8n', webhookController.handleN8nWebhook);

module.exports = router;