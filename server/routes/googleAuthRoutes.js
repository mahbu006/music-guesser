const passport = require('passport');

module.exports = app => {
    const passport = require('passport');
    const googleAuth = require('../config/googleAuth');

    googleAuth(passport);
    app.use(passport.initialize());

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/userinfo.profile']
    }));
    app.get('/auth/google/callback',
        passport.authenticate('google', {failureRedirect: '/'}),
        (req, res) => {
            req.session.token = req.user.token;
            res.redirect('/');
        }
    );
    app.get('/logout', (req, res) => {
        req.logout();
        req.session = null;
        res.redirect('/');
    })
}