export class AppError extends Error {
  constructor(message, statusCode = 500, options = {}) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = options.isOperational ?? true;
    this.details = options.details ?? null;

    Error.captureStackTrace(this, this.constructor);
  }
}
