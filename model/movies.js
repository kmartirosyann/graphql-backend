const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  name: String,
  genre: String,
  watched:Boolean,
  directorId: String,
});
module.exports = mongoose.model("movies", moviesSchema);
