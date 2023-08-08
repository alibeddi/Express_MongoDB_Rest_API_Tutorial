const { constants } = require('../Constants')
const ErrorHandler = (err, req, res, next) => {
    const StatusCode = res.statusCode ? res.statusCode : 500;
    switch (StatusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation failed", message: err.message, stackTrace: err.stack })

            break;
        case constants.NOT_FOUND:
            res.json({ title: "NOT FOUND", message: err.message, stackTrace: err.stack })
            break;

        case constants.UNAUTHORIZED:
            res.json({ title: "UNAUTHORIZED", message: err.message, stackTrace: err.stack })
            break;
        case constants.FORBIDDEN:
            res.json({ title: "FORBIDDEN", message: err.message, stackTrace: err.stack })
            break;

        case constants.SERVER_ERROR:
            res.json({ title: "SERVER_ERROR", message: err.message, stackTrace: err.stack })
            break;
        default:
            console.log("NO ERROR! all good")
            break;
    }
}

module.exports = ErrorHandler