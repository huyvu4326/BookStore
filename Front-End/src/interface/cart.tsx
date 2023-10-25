export interface ICart {
	productId: string;
	name: string;
	promotionalPrice: number;
	originalPrice: number;
	author: string;
	quantity: number;
}

export interface ICart {
	productId: string;
	imageUrl: string;
	name: string;
	promotionalPrice: number;
	originalPrice: number;
	author: string;
	quantity: number;
	_id: string;
}

export interface ICartResponse {
	_id: string;
	userId: string;
	items: ICart[];
	createdAt: string;
	updatedAt: string;
}

export interface ICartBody {
	userId: string;
	items: Omit<ICart, '_id'>[];
}
