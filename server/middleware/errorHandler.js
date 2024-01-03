function errorHandler(err, req, res, next) {
  let errors = [];
  let statusCode = 500;

  switch (err.msg) {
    case `SequelizeValidationError`:
      err.errors.forEach((error) => {
        errors.push(error.message);
      });
      statusCode = 400;
      break;
    case `SequelizeUniqueConstraintError`:
      err.errors.forEach((error) => {
        errors.push(error.message);
      });
      statusCode = 400;
      break;
    case `SequelizeDatabaseError`:
      errors.push("Invalid input syntax");
      statusCode = 400;
      break;
    case `INVALID_EMAIL_OR_PASSWORD`:
      errors.push("Invalid email or password");
      statusCode = 400;
      break;
    case `AUTHENTICATION_FAILED`:
      errors.push("Failed to authenticate!");
      statusCode = 401;
      break;
    case `AUTHORIZATION_FAILED`:
      errors.push("Failed to authorize!");
      statusCode = 401;
      break;
    case `PRODUCT_NOT_FOUND`:
      errors.push("Product not found!");
      statusCode = 404;
      break;
    default:
      errors.push("Internal server error");
  }
  res.status(statusCode).json({ errors });
}

module.exports = errorHandler;
