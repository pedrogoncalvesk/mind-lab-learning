/* eslint-disable no-console */
/**
 *  Load the routes
 */
const login = require('../routes/index');
const users = require('../routes/users');
const courses = require('../routes/courses');
const auth = require('../routes/auth');

module.exports = function (app) {

    console.log('Initializing Routes');

    // Register the routes
    app.use('/', login);
    app.use('/api', users);
    app.use('/api', courses);
    app.use('/api', auth);

};