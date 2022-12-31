import Router from "express";
import { saveOrder } from "../controllers/order/saveOrder.js";
import { getOrder } from "../controllers/order/getOrder.js";

const router = Router();

router.post("/create", saveOrder);
router.post("/:orderId", getOrder);

export default router;