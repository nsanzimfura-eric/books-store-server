import { Request, Response } from "express";
import BooksServices from "../services/books.service";

const bookServices = new BooksServices();

const BookControllers = {
  addBookToStore: async (req: Request, res: Response): Promise<any> => {
    const { title, writer, tag, cover_image } = req.body;

    if (!title || !writer || !tag || !cover_image) {
      return res.status(400).send("All required fields are required!");
    }

    try {
      const book = await bookServices.addBooksToStore(
        title,
        writer,
        tag,
        cover_image
      );
      return res.status(201).json({
        success: true,
        data: book,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Couldn't save new user",
        error: err.message,
      });
    }
  },
  addMoreBooksToStore: async (req: Request, res: Response): Promise<any> => {
    const { books } = req.body;
    if (!books) {
      return res.status(400).send("All required fields are required!");
    }

    try {
      let book;
      for (let b of books) {
        const { title, writer, tag, cover_image } = b;
        if (!title || !writer || !tag || !cover_image) {
          return res.status(400).send("All required fields are required!");
        }

        book = await bookServices.addBooksToStore(
          title,
          writer,
          tag,
          cover_image
        );
      }

      return res.status(201).json({
        success: true,
        data: book,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Couldn't save new user",
        error: err.message,
      });
    }
  },

  findAllBooks: async (req: Request, res: Response): Promise<any> => {
    try {
      const data = await bookServices.allBooks();
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default BookControllers;
