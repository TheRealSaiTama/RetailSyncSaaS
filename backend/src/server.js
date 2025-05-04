const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import passport configuration (ensure this runs AFTER dotenv.config())
require('./config/passport-setup'); // We don't need to assign it to a variable

// Import routes
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware --- //

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET, // Secret used to sign the session ID cookie
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Don't create session until something stored
    cookie: {
        // secure: process.env.NODE_ENV === 'production', // Use secure cookies in production (requires HTTPS)
        // maxAge: 1000 * 60 * 60 * 24 // Example: 1 day
    }
}));

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

// Body parsing middleware (for handling JSON request bodies)
app.use(express.json());

// --- Routes --- //

// Authentication routes
app.use('/auth', authRoutes);

// API routes (protected routes will go here)
app.use('/api', apiRoutes);

// Webhook routes (for n8n integration)
app.use('/webhook', webhookRoutes);

// Basic root route for testing
app.get('/', (req, res) => {
    // Check if the user is logged in
    const loggedIn = req.isAuthenticated();
    
    // Build a more detailed HTML response
    const html = `
        <h1>RetailSyncSaaS Backend Server</h1>
        <p>Status: ${loggedIn ? 'Logged In' : 'Not Logged In'}</p>
        
        ${loggedIn ? `
            <h2>Upload Spreadsheet to Google Drive</h2>
            <form action="/api/sheets/upload" method="post" enctype="multipart/form-data">
                <div>
                    <label for="spreadsheet">Select a spreadsheet file (.xls, .xlsx, .csv):</label>
                    <input type="file" id="spreadsheet" name="spreadsheet" accept=".xls,.xlsx,.csv" required>
                </div>
                <div>
                    <label for="fileName">Custom file name (optional):</label>
                    <input type="text" id="fileName" name="fileName" placeholder="Leave blank to use original filename">
                </div>
                <button type="submit">Upload to Google Drive</button>
            </form>
            
            <hr>
            
            <h2>Send to n8n Multi-Agent AI Workflow</h2>
            <form id="n8nForm" action="/api/sheets/send-to-n8n" method="post">
                <div>
                    <label for="spreadsheetId">Google Sheet ID:</label>
                    <input type="text" id="spreadsheetId" name="spreadsheetId" value="1Dv2jYXh9l2jMzfkSKO7QMxpPAu8NnCVTSvm0e06A938" required>
                </div>
                <div>
                    <label for="n8nWebhookUrl">n8n Webhook URL:</label>
                    <input type="text" id="n8nWebhookUrl" name="n8nWebhookUrl" placeholder="http://localhost:5678/webhook/..." style="width: 350px;" required>
                </div>
                <div>
                    <label for="additionalNotes">Additional Notes (optional):</label>
                    <textarea id="additionalNotes" name="additionalNotes" placeholder="Add any notes for the AI agents..."></textarea>
                </div>
                <button type="submit">Send to n8n Workflow</button>
            </form>
            
            <script>
                // Add JavaScript to handle the form submission via AJAX
                document.getElementById('n8nForm').addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    const spreadsheetId = document.getElementById('spreadsheetId').value;
                    const n8nWebhookUrl = document.getElementById('n8nWebhookUrl').value;
                    const additionalNotes = document.getElementById('additionalNotes').value;
                    
                    try {
                        const response = await fetch('/api/sheets/send-to-n8n', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                spreadsheetId,
                                n8nWebhookUrl,
                                metadata: {
                                    notes: additionalNotes
                                }
                            }),
                        });
                        
                        const result = await response.json();
                        
                        if (response.ok) {
                            alert('Success! Spreadsheet ID sent to n8n workflow.');
                        } else {
                            alert('Error: ' + result.message);
                        }
                    } catch (error) {
                        alert('Error sending request: ' + error.message);
                    }
                });
            </script>
            
            <hr>
            
            <h2>n8n Webhook Integration</h2>
            <p>If you have a sheet ID, you can access it via n8n using this webhook URL:</p>
            <code>http://localhost:${PORT}/webhook/sheet?spreadsheetId=YOUR_SHEET_ID&webhookToken=${process.env.WEBHOOK_TOKEN}</code>
            <p>Example with your sheet ID:</p>
            <code>http://localhost:${PORT}/webhook/sheet?spreadsheetId=1Dv2jYXh9l2jMzfkSKO7QMxpPAu8NnCVTSvm0e06A938&webhookToken=${process.env.WEBHOOK_TOKEN}</code>
            
            <p><a href="/api/protected">Test Protected Route</a></p>
            <p><a href="/auth/logout">Logout</a></p>
        ` : `
            <p><a href="/auth/google">Login with Google</a></p>
        `}
    `;
    
    res.send(html);
});

// --- Server Startup --- //

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
