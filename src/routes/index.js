import Router from 'express'
import User from './User.js'
import Order from './Order.js'
import Product from './Product.js'

const router = Router();

router.use("/user",User)
router.use("/order",Order)
router.use("/product",Product)

export default router
