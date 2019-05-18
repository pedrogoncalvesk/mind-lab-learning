const HttpStatus = require('http-status-codes');
const jwtToken = require('../utils/jwtToken');

/**
 * Route authentication middleware to verify a token
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 *
 */
module.exports = function (req, res, next) {
    if (req.headers.authorization) {
        let token = null;
        const authorization = req.headers.authorization.split(' ');
        if (authorization.length === 2) {
            const key = authorization[0];
            const val = authorization[1];

            if (/^Bearer$/i.test(key)) {
                token = val.replace(/"/g, '');
                // decode token
                if (token) {
                    // verifies secret and checks exp
                    jwtToken.verifyToken(token, function (err, decoded) {
                        if (err) {
                            return next(JSON.stringify({
                                message: 'You are not authenticated!',
                                status: HttpStatus.UNAUTHORIZED
                            }));
                        }
                        // if everything is good, save to request for use in other routes
                        req.decoded = decoded;
                        next();
                    });
                }
            }
        } else {
            // if there is no token
            // return an error
            return next(JSON.stringify({
                message: 'You are not authorized to perform this operation!',
                status: HttpStatus.UNAUTHORIZED
            }));

        }
    } else {
        // if there is no token
        // return an error
        return next(JSON.stringify({
            message: 'You are not authorized to perform this operation!',
            status: HttpStatus.UNAUTHORIZED
        }));

    }
};