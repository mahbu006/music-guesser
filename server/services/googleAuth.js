const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: keys.googleCallBack,
        proxy: true
      },
      async (token, refreshToken, profile, done) => {
        try {
          const existingUser = await User.findOne({
            passportId: profile.id
          });
          if (existingUser) return done(null, existingUser);
          const user = await new User({
            passportId: profile.id,
            username: profile.displayName,
            avi: profile.photos[0].value
          });
          return done(null, user);
        } catch (err) {
          console.log(err);
        }
      }
    )
  );
};
