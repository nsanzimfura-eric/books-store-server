import express from "express";
import AccountRoutes from "./account.routes";
import OrderRoutes from "./orders.routes";
import BookRoutes from "./books.routes";

const router = express.Router();

router.use("/auth", AccountRoutes);
router.use("/books", BookRoutes);
router.use("/orders", OrderRoutes);

router.use("*", (req, res) => {
  res.status(404).json({
    code: 404,
    message: "Not Found",
  });
});

export default router;
