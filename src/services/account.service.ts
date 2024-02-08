import { AppDataSource } from "../data-source";
import { User } from "../entity/user.entity";
import { generateToken } from "../helpers/jwt_tokens.helper";

class AccountService {
  private UserRepository: any;

  constructor() {
    this.UserRepository = AppDataSource.getRepository(User);
  }

  async createUser(full_name: string, email: string, password: string) {
    const data = {
      full_name,
      email,
      password,
      points: 100,
    };

    try {
      return await this.UserRepository.insert(data);
    } catch (error) {
      throw error;
    }
  }

  async login(user: User, password: string): Promise<any> {
    try {
      const passwordMatch = user.password === password;
      if (!passwordMatch) {
        return 0;
      }
      return generateToken(user);
    } catch (error) {
      console.log(error);
      throw new Error("Couldn't login");
    }
  }

  async findUserByEmail(email: string): Promise<User | null> {
    try {
      const user = await this.UserRepository.createQueryBuilder("user")
        .where("user.email = :email", { email })
        .addSelect("user.password")
        .getOne();

      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      return error;
    }
  }

  async updateUserPoints(points: number, user: User): Promise<User | null> {
    try {
      user.points = points;
      return await this.UserRepository.save(user);
    } catch (error) {
      return error;
    }
  }

  async findUserById(id: string): Promise<User | null> {
    try {
      const user = await this.UserRepository.createQueryBuilder("user")
        .where("user.id = :id", { id })
        .addSelect("user.password")
        .getOne();

      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      return error;
    }
  }
  async findAllUsers(): Promise<User[] | []> {
    try {
      const allUsers = await await this.UserRepository.find();
      return allUsers;
    } catch (error) {
      return error;
    }
  }
}

export default AccountService;
