const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const api = express()

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))

Object.keys(routes).forEach((route) => {
  api.use(`/${route}`, routes[route])
})

api.use((e, req, res, next) => {
  const status = e.response ? e.response.status : 500
  res.status(status).json({ message: e.message })
  next(e)
})

module.exports = api
