import Router from "express";
import { getAllProducts } from "../controllers/product/getAllProducts.js";

const router = Router();

router.post("/all", getAllProducts);

export default router;