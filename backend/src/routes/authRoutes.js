const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/spreadsheets'],
    accessType: 'offline',
    prompt: 'consent'
}));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login-failed' }), (req, res) => {
    res.redirect('/');
});

router.get('/login-failed', (req, res) => {
    res.status(401).send('<h1>Login Failed</h1>');
});

router.get('/check', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ isAuthenticated: true, user: req.user });
    } else {
        res.json({ isAuthenticated: false });
    }
});

router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.session.destroy((err) => {
            if (err) {
                console.error("Session destruction error:", err);
                return res.status(500).send('Could not log out.');
            }
            res.clearCookie('connect.sid');
            res.send('<h1>Logged Out</h1><a href="/">Home</a>');
        });
    });
});

module.exports = router;
