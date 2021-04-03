const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require("../config/keys");

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use(new GoogleStrategy({
            clientID: keys.googleClientId,
            clientSecret: keys.googleClientSecret,
            callbackURL: 'http://localhost:5000/auth/google/callback'
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
}