const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (error, decodeToken) => {
            if (error) {
                res.status(401).json({ message: 'Invalid Credentials' })
            } 
            else {
                req.user = { username: decodeToken.username }
                next();
            }
        })
    } else {
        res.status(400).json({ message: 'No token provided' })
    }
};