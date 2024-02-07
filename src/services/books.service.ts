import { AppDataSource } from "../data-source";
import { Book } from "../entity/book.entity";

class BooksServices {
  private booksRepository: any;

  constructor() {
    this.booksRepository = AppDataSource.getRepository(Book);
  }

  async addBooksToStore(
    title: string,
    writer: string,
    tag: string,
    cover_image: string
  ): Promise<Partial<Book>> {
    const book = {
      title,
      writer,
      tag,
      cover_image,
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
}

export default BooksServices;
