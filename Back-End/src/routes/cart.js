import  express  from "express"
import { addItemToCart, getCartOfUser, removeItem, removeItemToCart } from "../controllers/cart"
import { authenticate } from "../middlewares/authenticate"

const router = express.Router()
router.get('/cart', authenticate, getCartOfUser)
router.post('/cart', authenticate, addItemToCart)
router.post('/cart/removeProductItem', authenticate, removeItemToCart)
router.post('/cart/removeItem', authenticate, removeItem)
export default router;