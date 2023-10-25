import {
	addItemToCart,
	getCartOfUser,
	removeItem,
	removeItemToCart,
	resetAllCart,
} from '../controllers/cart';

import { authenticate } from '../middlewares/authenticate';
import express from 'express';

const router = express.Router();
router.get('/cart/:id', getCartOfUser);
router.post('/cart', addItemToCart);
router.post('/cart/removeProductItem/:productId/:userId', removeItemToCart);
router.post('/cart/removeItem/:productId/:userId', removeItem);
router.post('/cart/resetAllCart/:userId', resetAllCart);

export default router;
