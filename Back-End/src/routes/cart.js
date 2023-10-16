import  express  from "express"
import { addItemToCart, getCartOfUser, removeItem, removeItemToCart } from "../controllers/cart"
import { authenticate } from "../middlewares/authenticate"
import { authorization } from "../middlewares/authorization"

const router = express.Router()
router.get('/cart', authenticate,authorization, getCartOfUser)
router.post('/cart', authenticate, authorization, addItemToCart)
router.post('/cart/removeProductItem', authenticate, authorization, removeItemToCart)
router.post('/cart/removeItem', authenticate, authorization, removeItem)

export default router;