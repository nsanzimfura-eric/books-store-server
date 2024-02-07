import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";
import { Order } from "./entity/order.entity";
import { Book } from "./entity/book.entity";

export const AppDataSource = new DataSource({
  name: "default",
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.NODE_ENV === "development",
  logging: false,
  entities: [User, Order, Book],
  migrations: [],
  subscribers: [],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
