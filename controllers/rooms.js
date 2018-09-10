const debug = require('debug')('booking:routes')

const getAll = (req, res) => {
  debug('A request has come to /rooms')
  res.send({})
}

const getOne = (req, res) => {
  const { uuid } = req.params
  res.send({ uuid })
}

module.exports = {
  getAll: getAll,
  getOne: getOne
}
