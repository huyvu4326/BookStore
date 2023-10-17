import jwt from "jsonwebtoken";
import User from "../models/user";

export const authenticate = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(403).json({
        message: "Bạn chưa đăng nhập",
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    const { id } = jwt.verify(token, "haHuyVu");

    const user = await User.findById(id);
    if(!user){
        return res.status(203).json({
            message:"Không tìm thấy người dùng"
        })
    }
    req.user=user
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Bạn không có quyền truy cập!",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
        message: error.message
    })
  }
};