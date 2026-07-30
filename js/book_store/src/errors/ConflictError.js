import { AppError } from "./AppError.js";

export class ConflictError extends AppError {
  constructor(message = "Resource conflict") {
    super(message, 409);
  }
}
