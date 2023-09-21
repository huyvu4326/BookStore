export interface IBook {
    _id: number | string;
    name: string;
    price: number;
    img: string,
    categoryId: string,
    author: string,
    description: string,
    originalPrice: number,
    promotionalPrice: number
}