import { Response } from "express";
import OrderServices from "../services/orders.service";
import { UserInterface } from "../helpers/interfaces.helper";
import AccountService from "../services/account.service";
import BooksServices from "../services/books.service";

const orderServices = new OrderServices();
const usersServices = new AccountService();
const booksServices = new BooksServices();

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
    const doesBooksExist = await booksServices.bookById(book_id);
    if (!doesUserExist || !doesBooksExist) {
      return res.status(403).send("User or Book does not exist!");
    }
    // check for points
    const totalPrice = doesBooksExist.points * Number(quantity);
    if (doesUserExist.points < totalPrice) {
      return res.status(403).send("Purchase an other points");
    }
    const userPointsLeft = doesUserExist.points - totalPrice;

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
        message: "Couldn't Place Order",
        error: err,
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
  getAllOrders: async (req: UserInterface, res: Response): Promise<any> => {
    const { id: user_id } = req.user;
    if (!user_id) {
      return res.status(401).send("Login First!");
    }
    try {
      const orders = await orderServices.allOrdersByUserId(user_id);
      return res.status(201).json({
        success: true,
        data: orders,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Couldn't Get your Orders",
        error: err.message,
      });
    }
  },
};

export default OrderControllers;
