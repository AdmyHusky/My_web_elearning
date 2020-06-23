const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// set up port
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors({ origin: true, credentials: true, maxAge: 3600000 }))

// add routes
const router = require('./routes/router.js');
app.use('/api', router);

// run server
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
