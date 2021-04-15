const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
module.exports = passport => {
  /*  passport.serializeUser((user, done) => {
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
            avi:
              profile.photos.length === 0
                ? "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                : profile.photos[0].value
          }).save();
          return done(null, user);
        } catch (err) {
          console.log(err);
        }
      }
    )
  );
};
