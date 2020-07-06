// routes/router.js
const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
const salt = ("webelearning")
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const pool = require('../lib/db.js');
const userMiddleware = require('../middleware/users.js');
const { response } = require('express');


router.post('/sign-up', userMiddleware.validateRegister, (req, res, next) => {
    const { fname, lname, emailuser, password, birthday, sex } = req.body
    pool.query(`SELECT * FROM users WHERE email = $1`, [emailuser], (err, result) => {
        if (result.rows.length > 0) {
            return res.status(409).send({
                msg: 'This username is already in use!'
            });
        } else {
            // username is available
            const tohash = sha1(salt + password)
            const role = 'student'
            pool.query(`INSERT INTO users (id,fname, lname, email, password, birthday, sex, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [uuid.v4(), fname, lname, emailuser, tohash, birthday, sex, role], (error, result) => {
                if (error) {
                    console.log(error)
                    return res.status(400).send({
                        msg: error
                    });
                }
                res.status(201).send({
                    msg: 'Registered!'
                });
            });
        }
    });
});
router.post('/login', (req, res, next) => {
    const { emailuser, password } = req.body
    //console.log(emailuser)
    //console.log(password)
    pool.query(`SELECT * FROM users WHERE email =  $1`, [emailuser], (err, result) => {
        //console.log(result.rows.length)
        //console.log(!result.rows.length)
        //console.log(result.length)
        //console.log(!result.length)
        // user does not exists
        if (err) {
            return res.status(400).send({
                msg: 'err'
            });
        }
        if (!result.rows.length) {
            return res.status(401).send({
                msg: 'Username or password is incorrect!'
            });
        }
        // check password
        const tohash = sha1(salt + password)
        if (tohash == result.rows[0].password) {
            pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [emailuser, tohash], function (errorb, resultsb) {
                if (resultsb.rows.length > 0) {
                    const token = jwt.sign({
                        userfname: result.rows[0].fname,
                        userId: result.rows[0].id,
                        userrole: result.rows[0].role
                    },
                        'webelearning', {
                        expiresIn: '2h'
                    }
                    )
                    return res.status(200).send({
                        msg: 'Logged in!',
                        token,
                        user: result.rows[0]
                    });
                    // wrong password
                } else {
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!'
                    });
                }
            });
        } else {
            return res.status(401).send({
                msg: 'Username or password is incorrect!'
            });
        }
    });
});
router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});
module.exports = router;