const express = require('express')
const controller = require('../controllers/rooms')
const rooms = express.Router()
const endpoint = 'rooms'

rooms.get(`/${endpoint}`, controller.getAll)

rooms.get(`/${endpoint}/:uuid`, controller.getOne)
module.exports = rooms
