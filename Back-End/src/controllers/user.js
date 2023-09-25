import User from "../models/user";
import bcrypt from "bcryptjs";
import { signupSchema, loginSchema } from "../schemas/user";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import nodemailer from "nodemailer";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors.message,
      });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    user.password = undefined;
    return res.status(200).json({
      message: "Đăng ký thành công",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = loginSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        messages: errors.message,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email không tồn tại",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Mật khẩu không đúng",
      });
    }
    const token = jwt.sign({ id: user._id }, "haHuyVu", { expiresIn: "1d" });
    return res.status(200).json({
      message: "Đăng nhập thành công",
      accessToken: token,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const forgotPassword = async (req, res) => {
  try {
      const email = req.body.email
      const user = await User.findOne({ email: email })
      if (!user) {
          return res.status(400).json({
              message: "Email chưa được đăng ký"
          })
      }
      const resetToken = crypto.lib.WordArray.random(32).toString();
      user.passwordResetToken = crypto.SHA256(resetToken, 'haHuyVu').toString();
      user.passwordResetExpires = Date.now() + 10 * 60 * 1000;
      await user.save({ validateBeforeSave: false })
      const message = `Mã đổi mật khẩu của bạn là ${resetToken}. Mã đổi mật khẩu có hiệu lực 1 phút`
      const transporter = nodemailer.createTransport({
          tls: {
              rejectUnauthorized: false
          },
          service: 'gmail',
            auth: {
                user: 'tranngocdong2042003@gmail.com',
                pass: 'kaivhxsscgiuiosp'
            }
      });
      const mailOptions = {
          from: 'tranngocdong2042003@gmail.com',
          to: req.body.email,
          subject: 'FORGOT PASSWORD',
          text: message
      }
      try {
          await transporter.sendMail(mailOptions)
          return res.status(200).json({
              status: "success",
              message: "Token sent to email"
          })
      }
      catch (error) {
          user.passwordResetToken = undefined;
          user.passwordResetExpires = undefined;
          await user.save({ validateBeforeSave: false });
      }
  }
  catch (error) {
      res.status(400).json({
          message: error.message
      })
  }
}
export const resetPassword = async (req, res) => {
  try {
      const hashedToken = crypto.SHA256(req.params.token, 'haHuyVu').toString();
      const user = await User.findOne({
          passwordResetToken: hashedToken,
          passwordResetExpires: { $gt: Date.now() }
      })
      if (!user) {
          return res.status(400).json({
              message: "Mã đổi mật khẩu không chính xác"
          })
      }
      const handlePass = await bcrypt.hash(req.body.password, 10)
      user.password = handlePass;
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined
      user.passwordChangeAt = Date.now();
      await user.save({ validateBeforeSave: false })
      const token = jwt.sign({ id: user._id }, "haHuyVu", {
          expiresIn: '1d'
      })
      user.password = undefined
      return res.status(200).json({
          message: "Mật khẩu mới được cập nhập",
          user,
          token
      })
  }
  catch (error) {
      res.status(400).json({
          message: error.message
      })
  }
}