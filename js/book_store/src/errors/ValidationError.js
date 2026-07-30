import { AppError } from "./AppError.js";

export class ValidationError extends AppError {
  constructor(message = "Validation failed", details = null) {
    super(message, 422, {
      details,
    });
  }
}
