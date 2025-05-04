const express = require('express');
const router = express.Router();
const passport = require('passport');

// Routes will be added here

// Route to initiate Google OAuth flow
// When user visits /auth/google, Passport redirects them to Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/spreadsheets'],
    // Optional: uncomment if you need refresh tokens
    // accessType: 'offline',
    // prompt: 'consent'
}));

// Callback route that Google redirects to after authentication
// Passport middleware handles the callback, exchanges code for profile
// Then our custom callback in passport-setup.js runs
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/login-failed' // Optional: Redirect path if authentication fails
}), (req, res) => {
    // Successful authentication!
    // Instead of showing user info, redirect to the homepage
    res.redirect('/');
});

// Optional: Route for failed login
router.get('/login-failed', (req, res) => {
    res.status(401).send('<h1>Login Failed</h1>');
});

// Optional: Route to check authentication status (useful for frontend)
router.get('/check', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ isAuthenticated: true, user: req.user });
    } else {
        res.json({ isAuthenticated: false });
    }
});

// Optional: Route for logging out
router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        // Optional: Clear session cookie or redirect
        req.session.destroy((err) => {
            if (err) {
                console.error("Session destruction error:", err);
                return res.status(500).send('Could not log out.');
            }
            res.clearCookie('connect.sid'); // Clear the default session cookie
            // TODO: Redirect to frontend login page or home page
            // res.redirect('http://localhost:5173/');
             res.send('<h1>Logged Out</h1><a href="/">Home</a>');
        });
    });
});

module.exports = router;
