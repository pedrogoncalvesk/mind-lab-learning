const express = require('express');
const app = express();

// Initialize express
require('./config/express')(app);

// Initialize routes
require('./config/routes')(app);

// Initialize database
require('./config/database');

const HttpStatus = require('http-status-codes');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(JSON.stringify({ message: 'Not Found', status: HttpStatus.NOT_FOUND }));
});

// error handler
// eslint-disable-next-line
app.use(function (err, req, res, next) {

    try {
        const parsed = JSON.parse(err);
        res.status(parsed.status);

        return res.send(err);
    } catch (e) {
        // continue
    }

    // set locals, only providing error in development
    if (!res.locals) {
        res.locals = {};
    }
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR);
    res.render('error');
});

module.exports = app;
