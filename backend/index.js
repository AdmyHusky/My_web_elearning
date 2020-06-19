const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
var path = require('path');
const cors = require('cors');
const app = express()
const db = require('./src/authen')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(cors({   origin:true,   credentials:true,   maxAge:3600000 }))

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.post('/users', db.createUser)
app.post('/auth', db.auth)
app.get('/home', db.Welcomeback)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
