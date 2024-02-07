import { Request, Response } from "express";
import OrderServices from "../services/orders.service";
import { UserInterface } from "../helpers/interfaces.helper";

const orderServices = new OrderServices();

const OrderControllers = {
  createOrder: async (req: UserInterface, res: Response): Promise<any> => {
    const { id: user_id } = req.user;
    if (!user_id) {
      return res.status(401).send("Login First!");
    }

    const { book_id, quantity } = req.body;

    if (!book_id || !quantity) {
      return res.status(400).send("All required fields  are required!");
    }

    try {
      const order = await orderServices.createOrder(book_id, user_id, quantity);

      return res.status(201).json({
        success: true,
        data: order,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Couldn't save new user",
        error: err.message,
      });
    }
  },
};

export default OrderControllers;
