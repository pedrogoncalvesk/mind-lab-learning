/* eslint-disable no-console */
const mongoose = require('mongoose');

// Build the connection string
const connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST1}:${process.env.DB_PORT},${process.env.DB_HOST2}:${process.env.DB_PORT},${process.env.DB_HOST3}:${process.env.DB_PORT}/${process.env.DB_NAME}?ssl=true&replicaSet=${process.env.DB_REPLICA_SET}&authSource=${process.env.DB_AUTH_SOURCE}&retryWrites=true`;

// Create the database connection
mongoose.connect(connectionString, {
    useMongoClient: true
});

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
