const SpotifyStrategy = require("passport-spotify").Strategy;
const keys = require("../config/keys");
module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new SpotifyStrategy(
      {
        clientID: keys.spotifyClientId,
        clientSecret: keys.spotifyClientSecret,
        callbackURL: keys.spotifyCallBack,
        proxy: true
      },
      (accessToken, refreshToken, expiresIn, profile, done) => {
        return done(null, { profile: profile, accessToken: accessToken });
      }
    )
  );
};
