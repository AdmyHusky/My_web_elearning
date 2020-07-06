const jwt = require('jsonwebtoken');
module.exports = {
  validateRegister: (req, res, next) => {
    // fname min length 32
    if (!req.body.fname || req.body.fname.length >= 32) {
      return res.status(400).send({
        msg: 'Please enter a first name with min. 32 chars'
      });
    }

    // lname min length 32
    if (!req.body.lname || req.body.lname.length >= 32) {
      return res.status(400).send({
        msg: 'Please enter a last name with min. 32 chars'
      });
    }

    // password min 7 chars
    if (!req.body.password || req.body.password.length <= 7) {
      return res.status(400).send({
        msg: 'Please enter a password with min. 7 chars'
      });
    }
    next();
  },
  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const tokenPayload = token.split(' ')[1]
      const decoded = jwt.verify(
        tokenPayload,
        'webelearning'
      );
      req.userData = decoded;
      next();
    } catch (err) {
      return res.status(401).send({
        msg: 'Your session is not valid!'
      });
    }
  }
};
