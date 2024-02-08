import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Book } from "./book.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  book_id!: string;

  @Column({ nullable: true })
  user_id!: string;

  @Column()
  quantity!: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToMany(() => Book, (book) => book.orders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    eager: true,
  })
  @JoinTable({ name: "orders_books" })
  books!: Book[];
}
