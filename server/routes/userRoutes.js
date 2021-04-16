const mongoose = require("mongoose");
const User = mongoose.model("users");
const SingleScore = mongoose.model("singleScores");
module.exports = app => {
  app.post("/user/username/update", async (req, res) => {
    const { username } = req.body;
    if (!username) res.status(401).send({ error: "Username required" });
    try {
      const currentUser = await User.findByIdAndUpdate(req.user._id, {
        $set: { username: username }
      });
      res.status(200).send(currentUser);
    } catch (err) {
      res.status(400).send({ error: err });
    }
  });
  app.get("/user", async (req, res) => {
    try {
      res.status(200).send(req.user);
    } catch (err) {
      res.status(400).send({ error: "User could not be found." });
    }
  });

  app.get("/user/single/stats/all", async (req, res) => {
    try {
      const gamesPlayed = await SingleScore.aggregate([
        {
          $group: {
            userId: req.user._id,
            genre: $genre,
            genre_count: { $sum: 1 }
          }
        },
        { $sort: { genre_count: -1 } }
      ]);
      res.status(200).send(gamesPlayed);
    } catch (err) {
      res.status(400).send({ error: "User stats couldn't be found." });
    }
  });

  app.get("/user/single/stats/genre/:genre", async (req, res) => {
    try {
      const gamesPlayed = await SingleScore.aggregate([
        {
          $group: {
            userId: req.user._id,
            genre: req.params.genre,
            mode: $mode,
            mode_count: { $sum: 1 }
          }
        },
        { $sort: { mode_count: -1 } }
      ]);
      res.status(200).send(gamesPlayed);
      //games played
      //highest score in each mode
    } catch (err) {
      res
        .status(400)
        .send({ error: "User stats for this genre couldn't be found." });
    }
  });
};
