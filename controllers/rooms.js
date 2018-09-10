const debug = require('debug')('booking:routes')
const Room = require('../models/rooms')

const getAll = async (req, res) => {
  debug('A request has come to /rooms')
  const rooms = await Room.find()
  res.send(rooms)
}

const getOne = async (req, res) => {
  const { uuid } = req.params
  const room = await Room.find({ _id: uuid })
  res.send(room)
}

module.exports = {
  getAll: getAll,
  getOne: getOne
}
