const SpotifyStrategy = require("passport-spotify").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
module.exports = passport => {
  /* passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  }); */
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

  passport.use(
    new SpotifyStrategy(
      {
        clientID: keys.spotifyClientId,
        clientSecret: keys.spotifyClientSecret,
        callbackURL: keys.spotifyCallBack,
        proxy: true
      },
      async (accessToken, refreshToken, expires_in, profile, done) => {
        try {
          const existingUser = await User.findOne({
            passportId: profile.id
          });
          if (existingUser) return done(null, existingUser);
          const user = await new User({
            passportId: profile.id,
            username: profile.username,
            avi: profile.photos[0].value
          }).save();
          return done(null, user);
        } catch (err) {
          console.log(err);
        }
      }
    )
  );
};
