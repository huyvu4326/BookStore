import { IBook } from "../interface/book";
import instance from "./instance";

const token=JSON.parse(localStorage.getItem("user")!).accessToken
export const getProducts = () => {
  return instance.get("/books");
};
export const getProductById = (id: number | string) => {
  return instance.get(`/books/${id}`);
};
export const addProduct = (product: IBook) => {
    console.log(product);
  return instance.post("/books", product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const updateProduct = (product: IBook) => {
  return instance.patch(`/books/${product._id}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const deleteProduct = (id: number | string) => {
  return instance.delete(`/books/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
