const mongoose = require('mongoose')
const debug = require('debug')('booking:DB')
const Room = require('./models/rooms')
require('dotenv').load()

const roomsDefault = require('./mockups/rooms')

mongoose.connect('mongodb://localhost/hotel', { useNewUrlParser: true })
  .then(() => {
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
      mongoose.connection.db.dropDatabase().then(() => {
        roomsDefault.forEach((item) => {
          new Room(item).save()
        })
      })
    }
    debug('connected')
  })
