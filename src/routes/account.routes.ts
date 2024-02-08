import express from "express";
import AccountController from "../controllers/account.controller";
import isAuthenticated from "../middlewares/isAuthenticated";

const AccountRoutes = express.Router();

// authentication --------------------
AccountRoutes.post("/login", AccountController.login);

AccountRoutes.post("/register", AccountController.register);
AccountRoutes.get("/users", AccountController.getAllUsers);

export default AccountRoutes;
