const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-fqk19.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true})

//mongoose.connect('mongodb://localhost/omnistack8', { useNewUrlParser: true })

mongoose.Promise = global.Promise

module.exports = mongoose

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)



