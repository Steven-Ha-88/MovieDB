const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSchema = mongoose.Schema({
  userFrom: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  mediaId: {
    type: String,
  },
  mediaTitle: {
    type: String,
  },
  mediaImage: {
    type: String,
  },
  mediaRuntime: {
    type: String,
  }



})



// MongoDB will create a collection called 'Favourite' using
// the 'favouriteSchema
const Favourite = mongoose.model('Favourite', favouriteSchema);

module.exports = { Favourite }