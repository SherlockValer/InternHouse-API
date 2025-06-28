function errorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Something went wrong!";

  if (err.name === "CastError") {
    const message = `Invalid ${err.path} : ${err.value}`;
    err.message = message;
    err.statusCode = 400;
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    err.message = messages.join(", ");
    err.statusCode = 400;
  }

  res.status(err.statusCode).json({
    message: err.message,
  });
}

module.exports = errorHandler;
