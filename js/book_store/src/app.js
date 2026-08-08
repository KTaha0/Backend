import express from "express";
import { errorHandler } from "./middlewares/ErrorHandler.js";
import { healthCheck } from "./controllers/health.controller.js";
import authRouter from "./routes/auth.route.js";
import booksRouter from "./routes/book.route.js";

export const app = express();
app.use(express.json());

app.get("/health", healthCheck);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

app.use("/auth", authRouter);
app.use("/books", booksRouter);
app.use(errorHandler);
