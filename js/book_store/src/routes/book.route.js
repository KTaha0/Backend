import { Router } from "express";
import {} from "../controllers/book.controller.js";

const router = Router();

router.get("/books");
router.get("/books/:id");

router.post("/books"); //todo: only admins
router.delete("/books/:id"); //todo: only admins
router.patch("/books/:id"); //todo: only admain

export default router;
