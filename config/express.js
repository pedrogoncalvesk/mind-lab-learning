/* eslint-disable no-console */
/**
 * Module dependencies.
 */
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const constant = require(__dirname + '/constants');

module.exports = function (app) {

    console.log('Initializing Express');

    // view engine setup
    app.set('views', constant.viewsDir);
    app.set('view engine', 'pug');

    // uncomment after placing your favicon in /public
    app.use(favicon(path.join(constant.assetsDir, 'favicon.ico')));

    app.use(cors());
    app.use(helmet());
    app.use(compression());
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(express.static(constant.assetsDir));

};
