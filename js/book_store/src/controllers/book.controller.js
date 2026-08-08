import { getAllBooks } from "../services/books.service.js";

export async function getBooks(req, res, next) {
  try {
    const books = await getAllBooks(req.query);

    res.status(200).json({
      books,
    });
  } catch (error) {
    next(error);
  }
}
