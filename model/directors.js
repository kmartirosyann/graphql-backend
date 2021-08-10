const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorsSchema = new Schema({
  name: String,
  age: String,
});
module.exports = mongoose.model("directors", directorsSchema);
