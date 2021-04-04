const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  passportId: String,
  username: String,
  avi: String
});
mongoose.model("users", userSchema);
