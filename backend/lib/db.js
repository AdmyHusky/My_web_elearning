const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'apiaccount',
    password: 'passwordwebelearning',
    port: 5432,
})
module.exports = pool;