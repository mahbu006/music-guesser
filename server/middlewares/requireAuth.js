module.exports = app => {
  const mongoose = require("mongoose");
  const User = mongoose.model("users");
  app.use(async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("You must be logged in");
    const token = authorization.replace("Bearer ", "");
    const user = await User.findById(token);
    req.user = user;
    if (!req.user)
      return res.status(400).send({ error: "You must be logged in" });
    next();
  });
};
