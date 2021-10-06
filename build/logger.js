"use strict";
var _a = require('winston'), format = _a.format, createLogger = _a.createLogger, transports = _a.transports;
var timestamp = format.timestamp, combine = format.combine, printf = format.printf, errors = format.errors;
function buildLogger() {
    var logFormat = printf(function (_a) {
        var level = _a.level, message = _a.message, timestamp = _a.timestamp, stack = _a.stack;
        return timestamp + " " + level + ": " + (stack || message);
    });
    return createLogger({
        format: combine(format.colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), errors({ stack: true }), logFormat),
        level: 'debug',
        transports: [new transports.Console()]
    });
}
module.exports = buildLogger;
