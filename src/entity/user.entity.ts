import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Order } from "./order.entity";

@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "first_name" })
  full_name!: string;

  @Column({ unique: true })
  @IsNotEmpty({ message: "Email is required" })
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column({ default: 100 })
  points!: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;

  @OneToMany(() => Order, (orders) => orders.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    eager: true,
  })
  orders?: Order[];
}
