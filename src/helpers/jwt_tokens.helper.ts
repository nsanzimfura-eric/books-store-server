import jwt from "jsonwebtoken";
import { User } from "../entity/user.entity";

export const generateToken = (user: User): string => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_TOKEN_EXPIRATION,
  });
};
