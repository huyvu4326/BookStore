import { ICart, ICartBody, ICartResponse } from '../interface/cart';

import instance from './instance';

export const getAllCarts = async (userId: string) => {
	return instance.get(`/cart/${userId}`);
};

export const removeAllCart = async (userId: string, productId: string) => {
	return instance.post(`/cart/removeItem/${productId}/${userId}`);
};

export const removeCart = async (userId: string, productId: string) => {
	return instance.post(`/cart/removeProductItem/${productId}/${userId}`);
};

export const addCart = async (body: ICartBody) => {
	return instance.post('/cart', body);
};

export const resetAllCart = async (userId: string) => {
	return instance.post(`/cart/resetAllCart/${userId}`);
};
