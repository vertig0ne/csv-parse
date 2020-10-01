const express = require('express')
const cors = require('cors')
const api = require('./api')

const server = express()

server.use(cors())

server.get('/ping', (req, res) => {
  return res.json({ message: 'pong' })
})

server.use('/api', api)

const port = parseInt(process.env.PORT, 10) || 3000

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on ${port}`)
})

module.exports = server
