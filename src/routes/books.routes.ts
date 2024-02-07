import express from "express";
import BookControllers from "../controllers/book.controller";

const BookRoutes = express.Router();

BookRoutes.post("/books", BookControllers.addBookToStore);

BookRoutes.post("/books/more", BookControllers.addMoreBooksToStore);
BookRoutes.get("/books", BookControllers.findAllBooks);

export default BookRoutes;
