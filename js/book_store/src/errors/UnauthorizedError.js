import { AppError } from "./AppError.js";

export class UnauthorizedError extends AppError {
  constructor(message = "Authentication required") {
    super(message, 401);
  }
}
