export interface IBook {
    _id: number | string;
    name: string;
    price: number;
    imageUrl: string,
    categoryId: string,
    author: string,
    description: string,
    originalPrice: number,
    promotionalPrice: number
}