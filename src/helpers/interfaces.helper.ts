import { User } from "../entity/user.entity";
import { Request } from "express";

export interface UserInterface extends Request {
  user: User;
}
