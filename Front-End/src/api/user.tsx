import { IUser } from "../interface/user";
import instance from "./instance";
export const signup = (user: IUser) => {
  return instance.post("/signup", user);
};
export const login = (user: IUser) => {
  return instance.post("/signin", user);
};
export const forgotPassword = (email: string) => {
  return instance.post("/forgotPassword", { email });
};
export const resetPassword = (token: string, password: string) => {
  return instance.patch(`/resetPassword/${token}`, { token, password });
};