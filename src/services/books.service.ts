import { AppDataSource } from "../data-source";
import { Book } from "../entity/book.entity";
import { Order } from "../entity/order.entity";

class BooksServices {
  private booksRepository: any;
  private orderRepo: any;

  constructor() {
    this.booksRepository = AppDataSource.getRepository(Book);
    this.orderRepo = AppDataSource.getRepository(Order);
  }

  async addBooksToStore(
    title: string,
    writer: string,
    tags: string,
    cover_image: string,
    points: number
  ): Promise<Partial<Book>> {
    const book = {
      title,
      writer,
      tags,
      cover_image,
      points,
    };

    try {
      return await this.booksRepository.insert(book);
    } catch (error) {
      throw error;
    }
  }

  async bookById(id: string): Promise<Book | null> {
    try {
      const book = await this.booksRepository.findOne({ where: { id } });
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async allBooks(): Promise<Book[] | []> {
    try {
      const allBooks = await this.booksRepository.find();
      return allBooks;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAll(): Promise<Book[] | []> {
    try {
      const allBooks = await this.orderRepo.delete({});
      return allBooks;
    } catch (error) {
      console.log(error);
    }
  }
}

export default BooksServices;
