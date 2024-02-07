import { Request, Response } from "express";
import { UserInterface } from "../helpers/interfaces.helper";
import AccountService from "../services/account.service";

const accountService = new AccountService();

const AccountController = {
  register: async (req: Request, res: Response): Promise<any> => {
    const { full_name, email, password } = req.body;

    if (!full_name || !password || !email) {
      return res.status(400).send("All required fields  are required!");
    }
    let lowerCaseEmail = email;
    if (email) {
      lowerCaseEmail = email.trim().toLowerCase();
      const doesEmailExist = await accountService.findUserByEmail(
        lowerCaseEmail
      );
      if (doesEmailExist) return res.status(400).send("Email already exists!");
    }

    try {
      const user = await accountService.createUser(full_name, email, password);
      return res.status(201).json({
        success: true,
        data: user,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Couldn't save new user",
        error: err.message,
      });
    }
  },

  login: async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;

    if (!email || !password!)
      return res.status(400).send("Empty email or password");

    const lowerCaseEmail = email.trim().toLowerCase();

    const userByEmail = await accountService.findUserByEmail(lowerCaseEmail);

    if (!userByEmail) return res.status(404).send("Email is not registered");

    try {
      const token = await accountService.login(userByEmail, password);
      if (token === 0) return res.status(400).send("Incorrect Password");
      const data = { ...userByEmail, token };
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default AccountController;
