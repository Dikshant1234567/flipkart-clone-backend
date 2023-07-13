import express from 'express'
import {loginController, sinupController} from '../controller/user-controller.js'
import { getProductId, getProducts } from '../controller/product-controller.js'


const router = express.Router()

router.post('/sinup', sinupController)
router.post('/login', loginController)


router.get('/product', getProducts)

router.get('/product/:id', getProductId)

export default router