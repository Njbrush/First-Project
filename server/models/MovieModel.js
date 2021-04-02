const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reqString = {
  type: String,
  required: true
};

const reqNum = {
    type: Number,
    required: true
};

const movieSchema = new Schema({
  title: reqString,
  rating: reqNum
});

module.exports = mongoose.model('Movie', movieSchema);
