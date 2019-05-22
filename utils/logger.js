const fs = require('fs');
const winston = require('winston');
require('winston-daily-rotate-file');

const tsFormat = new Date().toISOString();
const logDir = process.env.LOGGING_DIR || 'logs';

// Create logs directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

module.exports = new (winston.Logger)({
    transports: [
        new (winston.transports.DailyRotateFile)({
            timestamp: tsFormat,
            datePattern: 'yyyy-MM-dd',
            prepend: true,
            filename: logDir + '/-log.log',
            level: 'info'
        })
    ]
});
