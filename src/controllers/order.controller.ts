import { Response } from "express";
import OrderServices from "../services/orders.service";
import AccountService from "../services/account.service";
import BooksServices from "../services/books.service";
import { UserInterface } from "../helpers/interfaces.helper";
import { isArray } from "class-validator";

const orderServices = new OrderServices();
const usersServices = new AccountService();
const booksServices = new BooksServices();

const OrderControllers = {
  placeOrder: async (req: UserInterface, res: Response): Promise<any> => {
    const { id: user_id } = req.user;
    if (!user_id) {
      return res.status(401).send("Login First!");
    }

    const { order } = req.body as any;

    if (!order) {
      return res.status(403).send("place order plz!");
    }
    const doesUserExist = await usersServices.findUserById(user_id);
    let totalPrice = 0;
    for (let o of order) {
      const { book_id, quantity } = o;
      if (!book_id || !quantity) {
        return res.status(403).send("place order plz!");
      }
      const doesBooksExist = await booksServices.bookById(book_id);
      // total price
      const price = doesBooksExist.points * Number(quantity);
      totalPrice += price;
      if (!doesUserExist || !doesBooksExist) {
        return res.status(403).send("User or Book does not exist!");
      }
    }

    //  does user exists and already have points ?
    // check for points
    if (doesUserExist.points < totalPrice) {
      return res.status(403).send("Purchase an other points");
    }
    const userPointsLeft = doesUserExist.points - totalPrice;

    try {
      const PlacedOrder = await orderServices.createOrder(
        order,
        doesUserExist,
        userPointsLeft
      );

      return res.status(201).json({
        success: true,
        data: PlacedOrder,
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
