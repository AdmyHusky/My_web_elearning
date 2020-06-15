const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const db = require('./src/queries_register')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(cors({   origin:true,   credentials:true,   maxAge:3600000 }))

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.post('/users', db.createUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
