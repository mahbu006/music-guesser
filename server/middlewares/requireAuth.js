module.exports = app => {
  app.use((req, res, next) => {
    if (!req.user)
      return res.status(401).send({ error: "You must be logged in" });
    next();
  });
};
