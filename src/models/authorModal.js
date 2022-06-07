const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    author_name: {
    type: String,
    required: true,
  },
  author_id: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("author", authorSchema);

