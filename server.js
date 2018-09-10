'use strict'

const debug = require('debug')('booking:api')
const http = require('http')
const chalk = require('chalk')
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const parser = require('body-parser')
const swaggerDocument = require('./swagger.json')

const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
require('./database')
const api = require('./routes/rooms')

app.use(parser.json())
app.use('/api/v1', api)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Express Error Handler
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message })
})

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

server.listen(port, () => {
  console.log(`${chalk.green('[booking-api]')} server listening on port ${port}`)
})
