const CustomAPIError = require("./custom-error");

class BadRequestError extends CustomAPIError {
  constructor(message, statusCode) {
    this.message = message;
  }
}

module.exports = BadRequestError;
