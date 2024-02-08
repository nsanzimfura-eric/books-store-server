import { Request, Response } from "express";
import OrderServices from "../services/orders.service";
import { UserInterface } from "../helpers/interfaces.helper";
import AccountService from "../services/account.service";

const orderServices = new OrderServices();
const usersServices = new AccountService();

const OrderControllers = {
  placeOrder: async (req: UserInterface, res: Response): Promise<any> => {
    const { id: user_id } = req.user;
    if (!user_id) {
      return res.status(401).send("Login First!");
    }

    const { book_id, quantity } = req.body;

    if (!book_id || !quantity) {
      return res.status(403).send("All required fields  are required!");
    }

    //  does user exists and already have points ?
    const doesUserExist = await usersServices.findUserById(user_id);
    if (!doesUserExist) {
      return res.status(403).send("User does not exist!");
    }
    // check for points
    if (doesUserExist.points < Number(quantity)) {
      return res.status(403).send("Purchase an other points");
    }
    const userPointsLeft = doesUserExist.points - Number(quantity);

    try {
      const order = await orderServices.createOrder(
        book_id,
        user_id,
        Number(quantity),
        doesUserExist,
        userPointsLeft
      );

      return res.status(201).json({
        success: true,
        data: order,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Couldn't create Order",
        error: err.message,
      });
    }
  },
  cancelOrder: async (req: UserInterface, res: Response): Promise<any> => {
    const { id: user_id } = req.user;
    if (!user_id) {
      return res.status(401).send("Login First!");
    }
    //  does user exists and already have points ?
    const doesUserExist = await usersServices.findUserById(user_id);

    // const userPointsLeft = doesUserExist.points - Number(quantity);

    try {
      const order = await orderServices.cancelOrder(user_id);
      return res.status(201).json({
        success: true,
        data: order,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Couldn't cancel Order",
        error: err.message,
      });
    }
  },
};

export default OrderControllers;
