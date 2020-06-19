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
    const tohash = sha1(salt + password)

    pool.query('INSERT INTO users (fname, lname, email, password, birthday, sex) VALUES ($1, $2, $3, $4, $5, $6)', [fname, lname, emailuser, tohash, birthday, sex], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

const auth = (request, response) => {
    const { emailuser, password } = request.body
    const tohash = sha1(salt + password)
    if (emailuser && password) {
        pool.query('SELECT * FROM users WHERE email = $1 AND password = $2',[emailuser, tohash], function (error, results) {
        console.log(results.rows.length)
           if (results.rows.length > 0) {
                request.session.loggedin = true;
                request.session.emailuser = emailuser;
                response.redirect('/home');
            } else {
                response.send('Incorrect emailuser and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter emailuser and Password!');
        response.end();
    }
};

const Welcomeback = (request, response) => {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
};


module.exports = {
    getUsers,
    createUser,
    auth,
    Welcomeback,
}