export interface IBook {
	_id: number | string;
	name: string;
	price: number;
	img: string;
	categoryId: string;
	author: string;
	description: string;
	originalPrice: number;
	promotionalPrice: number;
}

export interface IBookV2 {
	_id: number | string;
	name: string;
	price: number;
	imageUrl: string;
	categoryId: string;
	author: string;
	description: string;
	originalPrice: number;
	promotionalPrice: number;
}
