import { IAuthor } from "../interface/author";
import instance from "./instance";

const token=JSON.parse(localStorage.getItem("user")!).accessToken
export const getAuthors = () => {
  return instance.get("/authors");
};
export const getAuthorById = (id: number | string) => {
  return instance.get(`/authors/${id}`);
};
export const addAuthor = (author: IAuthor) => {
    console.log(author);
  return instance.post("/authors", author, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const updateAuthor = (author: IAuthor) => {
  return instance.patch(`/authors/${author._id}`, author, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const deleteAuthor = (id: number | string) => {
  return instance.delete(`/authors/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
