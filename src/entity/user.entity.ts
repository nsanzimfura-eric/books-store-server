import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  Unique,
  JoinColumn,
  OneToMany,
  Generated,
} from "typeorm";
import { IsEmail, IsNotEmpty } from "class-validator";

@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "first_name" })
  full_name!: string;

  @Column({ unique: true })
  @IsEmail({}, { message: "Invalid email format" })
  @IsNotEmpty({ message: "Email is required" })
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column({ default: 100 })
  points!: number;

  // @ManyToOne(() => Institution, (institution) => institution.admins, {
  //   onDelete: "CASCADE",
  //   onUpdate: "CASCADE",
  //   eager: true,
  // })
  // @JoinColumn({ name: "institution_id" })
  // adminInstitution: Institution;

  // @OneToMany(() => Project, (project) => project.admins, {
  //   onDelete: "CASCADE",
  //   onUpdate: "CASCADE",
  //   eager: false,
  // })
  // @JoinColumn()
  // assignedProjects: Project[];

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
