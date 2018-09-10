const mongoose = require('mongoose')

const roomSchema = {
  title: String,
  feature_img: String,
  price: Number,
  description: String,
  status: Boolean
}

const Room = mongoose.model('Room', roomSchema, 'rooms')

module.exports = Room
