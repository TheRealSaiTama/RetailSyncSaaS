const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');

dotenv.config();

require('./config/passport-setup');

const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();

app.engine('html', exphbs.engine({
    defaultLayout: false,
    extname: '.html'
}));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;

app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
                // secure: process.env.NODE_ENV === 'production',
                // maxAge: 1000 * 60 * 60 * 24
        }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/webhook', webhookRoutes);

app.get('/', (req, res) => {
    const loggedIn = req.isAuthenticated();
    res.render('index', {
        loggedIn,
        port: PORT,
        webhookToken: process.env.WEBHOOK_TOKEN
    });
});

app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
});
