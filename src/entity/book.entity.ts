import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "is_resolved", default: false })
  title!: boolean;

  @Column()
  writer!: string;

  @Column()
  tags!: string;

  @Column()
  points!: number;

  @Column()
  cover_image!: string;

  @ManyToMany(() => Order, (orders) => orders.books, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  orders: Order[];

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
