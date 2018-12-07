// Requirements
const express = require('express')
const bodyParser = require('body-parser')

const massive = require('massive')
require('dotenv').config()

const controller = require('./controller')

const app = express()
app.use(bodyParser.json())

// Massive
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    }).catch(err => console.log('Error', err))

// CRUD
app.get('/api/houses', controller.getHouses)

app.post('/api/newhouses', controller.createHouse)

app.delete('/api/houses/:id', controller.deleteHouse)

// LISTEN
const port = 4000
app.listen(port, () => { console.log(`I am On Port: ${port}`) })