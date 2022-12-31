import Router from 'express'
import User from './User.js'
import Order from './Order.js'

const router = Router();

router.use("/user",User)
router.use("/order",Order)

export default router
