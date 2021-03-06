const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  passportId: String,
  username: {
    type: String,
    unique: true
  },
  avi: String
});
mongoose.model("users", userSchema);
