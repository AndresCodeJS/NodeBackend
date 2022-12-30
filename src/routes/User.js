import Router from "express";
import { loginUser } from "../controllers/user/index.js";

const router = Router();

router.post("/login", loginUser);

export default router;