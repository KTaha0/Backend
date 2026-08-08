import { Router } from "express";
import { getBooks } from "../controllers/book.controller.js";

const router = Router();

router.get(`/`, getBooks);

// router.post("/books"); //todo: only admins
// router.delete("/books/:id"); //todo: only admins
// router.patch("/books/:id"); //todo: only admain

export default router;
