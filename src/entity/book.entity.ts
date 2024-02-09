import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  writer!: string;

  @Column()
  tags!: string;

  @Column()
  points!: number;

  @Column()
  cover_image!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;

  @ManyToOne(() => Order, (order) => order.books, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  order?: Order;
}
