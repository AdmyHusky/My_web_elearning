const Pool = require('pg').Pool
const sha1 = require('sha1');
const salt = ("webelearning")
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'apiaccount',
    password: 'passwordwebelearning',
    port: 5432,
})
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { fname, lname, emailuser, password, birthday, sex } = request.body
    const tohash = sha1(salt+password)

    pool.query('INSERT INTO users (fname, lname, email, password, birthday, sex) VALUES ($1, $2, $3, $4, $5, $6)', [fname, lname, emailuser, tohash, birthday, sex], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

module.exports = {
    getUsers,
    createUser,
}