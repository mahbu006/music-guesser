const mongoose = require("mongoose");
const User = mongoose.model("users");
const SingleScore = mongoose.model("singleScores");
module.exports = app => {
  app.post("/single/score", async (req, res) => {
    const { mode, value, genre } = req.body;
    if (!mode || !genre)
      return res.status(401).send({ error: "All attributes are required" });
    try {
      const currentScore = await SingleScore.findOne({
        userId: req.user._id,
        mode: mode,
        genre: genre
      });
      if (!currentScore) {
        const score = await new SingleScore({
          userId: req.user._id,
          mode: mode,
          value: value,
          genre: genre
        }).save();
        res.status(200).send({ score: score });
      } else if (value > currentScore.value) {
        const newScore = await SingleScore.findOneAndUpdate(
          { userId: req.user._id, mode: mode, genre: genre },
          { $set: { value: value } },
          { new: true }
        );
        res.status(200).send({ score: newScore });
      }
      res.status(200).send({ score: currentScore });
    } catch (err) {
      res
        .status(402)
        .send({ error: "There was an error receiving the stats." });
    }
  });

  app.get("/single/leaderboard/:mode/:genre", async (req, res) => {
    try {
      const scores = await SingleScore.find({
        mode: req.params.mode,
        genre: req.params.genre
      }).sort({ value: -1 });
      res.status(200).send(scores);
    } catch (err) {
      res
        .status(400)
        .send({ error: "There was an error getting the leaderboard." });
    }
  });
};
