// errorHandler.js
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            status: err.status || 500,
            message: err.message || "Errore interno del server"
        }
    });
};

module.exports = errorHandler;
