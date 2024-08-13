import express from "express";
import { getBook } from "../controller/booksController.js"; // Ensure the correct path and file extension

const router = express.Router();
router.get("/", getBook);

export default router;
