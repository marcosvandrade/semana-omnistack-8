const express = require('express')

server = express()

server.get('/', (req, res) => {
    return res.json({ message: `Olá ${req.query.name}`})
})

server.listen(3333)



