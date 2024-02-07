import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated";
import OrderControllers from "../controllers/order.controller";

const OrderRoutes = express.Router();

OrderRoutes.post("/order", isAuthenticated, OrderControllers.createOrder);

export default OrderRoutes;
