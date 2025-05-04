const express = require('express');
const router = express.Router();
const sheetController = require('../controllers/sheetController');
const multer = require('multer');

// Configure multer for memory storage (files will be in memory as Buffer objects)
const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, // Limit file size to 10MB
    },
    fileFilter: (req, file, cb) => {
        // Accept only spreadsheet file types
        if (
            file.mimetype === 'application/vnd.ms-excel' || // .xls
            file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || // .xlsx
            file.mimetype === 'text/csv' // .csv
        ) {
            cb(null, true);
        } else {
            cb(new Error('Only spreadsheet files (.xls, .xlsx, .csv) are allowed.'), false);
        }
    }
});

// API routes will be added here

// Middleware to check if user is authenticated (example)
function ensureAuthenticated(req, res, next) {
    // Check if user is authenticated (Passport adds this method)
    if (req.isAuthenticated()) {
        // Also check if the user object has the access token we stored
        if (req.user && req.user.accessToken) {
             return next();
        }
        // If authenticated but token somehow missing (shouldn't happen with current setup, but good practice)
        res.status(401).json({ message: 'Access token missing in session.'});
    } else {
        res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }
}

// Error handler for multer errors
function handleMulterError(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        // A multer error occurred when uploading (e.g., file too large)
        return res.status(400).json({ message: `File upload error: ${err.message}` });
    } else if (err) {
        // A non-multer error occurred
        return res.status(400).json({ message: err.message });
    }
    next();
}

// Example protected route (Keep this for testing auth)
router.get('/protected', ensureAuthenticated, (req, res) => {
    res.json({ message: 'You have accessed protected data!', user: req.user });
});

// --- Sheet Routes --- //

// POST /api/sheets/copy
// Route to copy a Google Sheet
router.post('/sheets/copy', ensureAuthenticated, sheetController.copySheetController);

// POST /api/sheets/upload
// Route to upload a spreadsheet file to Google Drive
router.post(
    '/sheets/upload',
    ensureAuthenticated,
    upload.single('spreadsheet'), // 'spreadsheet' is the field name in the form
    handleMulterError,
    sheetController.uploadSpreadsheetController
);

// POST /api/sheets/send-to-n8n
// Route to send a spreadsheet ID to an n8n workflow
router.post(
    '/sheets/send-to-n8n',
    ensureAuthenticated,
    sheetController.sendToN8nController
);

module.exports = router;
