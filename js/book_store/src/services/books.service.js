import { findAllBooks } from "../models/books.model.js";

export async function getAllBooks(options) {
  return findAllBooks(options);
}
