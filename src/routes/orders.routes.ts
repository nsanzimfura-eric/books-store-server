import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated";
import OrderControllers from "../controllers/order.controller";

const OrderRoutes = express.Router();

OrderRoutes.post("/", isAuthenticated, OrderControllers.placeOrder);
OrderRoutes.delete("/", isAuthenticated, OrderControllers.cancelOrder);
OrderRoutes.get("/", isAuthenticated, OrderControllers.getAllOrders);

export default OrderRoutes;
