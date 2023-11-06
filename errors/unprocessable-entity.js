const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");
class UnprocessableEntityError extends CustomAPIError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
  }
}

module.exports = UnprocessableEntityError;

//----------> a form cannot be processed due to invalid details provided
