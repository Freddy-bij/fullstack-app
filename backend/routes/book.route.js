import express from "express";
import { deleteBook, getBook, getSingleBook, newBook, updateBook } from "../controller/book.controller.js";

const router = express.Router();

router.post("/", newBook );
router.get("/" , getBook);
router.get("/:id" , getSingleBook);
router.put("/:id" , updateBook);
router.delete("/:id",deleteBook);
 
export default router;