import express from "express";
import BookControllers from "../controllers/book.controller";

const BookRoutes = express.Router();

BookRoutes.post("/", BookControllers.addBookToStore);

BookRoutes.post("/more", BookControllers.addMoreBooksToStore);
BookRoutes.get("/", BookControllers.findAllBooks);
// for demo
BookRoutes.delete("/", BookControllers.deleteAll);

export default BookRoutes;
