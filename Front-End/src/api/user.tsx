import { IUser } from "../interface/user";
import instance from "./instance";

export const signup = (user: IUser) => {
  return instance.post("/signup", user);
};
export const login = (user: IUser) => {
  return instance.post("/signin", user);
};
export const getProfile = (token) => {
  return instance.get(`/getProfile`, {
    headers: {
      Authorization:`Bearer ${JSON.parse(localStorage.getItem(token)!)}`
    },
  })
}
export const updateProfile = (newUser, token) => {
  return instance.patch('/updateProfile', newUser, {
    headers: {
      Authorization:`Bearer ${JSON.parse(localStorage.getItem(token)!)}`
    },
  });
};
export const forgotPassword = (email: string) => {
  return instance.post("/forgotPassword", { email });
};
export const resetPassword = (token: string, password: string) => {
  return instance.patch(`/resetPassword/${token}`, { password });
};
export const updatePassword = (value, token) => {
  return instance.patch('/updatePassword', value, {
    headers: {
      Authorization:`Bearer ${JSON.parse(localStorage.getItem(token)!)}`
    },
  });
};