import Router from 'express'
import User from './User.js'

const router = Router();

router.use("/user",User)

export default router
