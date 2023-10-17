import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import nodemailer from "nodemailer";

export const getProfile = async (req, res) => {
  try {
      const userLogger = await User.findById(req.user._id);
      return res.status(200).json({
          message: 'Lấy thông tin cá nhân thành công',
          user: userLogger
      })
  }
  catch (error) {
      return res.status(400).json({
          message: error.message
      })
  }
}
export const updateProfile = async (req, res) => {
  const user = req.user
  try {
      const userLogger = req.user;
      const userUpdate = await User.findByIdAndUpdate(userLogger._id, req.body, {
          new: true
      })
      const token = jwt.sign({ id: user._id }, "haHuyVu", {
          expiresIn: '1d'
      })
      return res.status(200).json({
          message: 'Cập nhập thông tin cá nhân thành công',
          user: userUpdate,
          token
      })
  }
  catch (error) {
      return res.status(400).json({
          message: error.message
      })
  }
}
export const updatePassword = async (req, res) => {
  try {
      const user = req.user;
      const isMatch = await bcrypt.compare(req.body.currentPassword, user.password)
      if (!isMatch) {
          return res.status(400).json({
              message: "Mật khẩu hiện tại không đúng"
          })
      }
      const token = jwt.sign({ id: user._id }, "haHuyVu", {
          expiresIn: '1d'
      })
      const hashPassword = await bcrypt.hash(req.body.newPassword, 10)
      const newUser = await User.findByIdAndUpdate(user._id, {
          password: hashPassword,
          passwordChangeAt: Date.now()
      }, {
          new: true
      })
      user.password = undefined
      return res.status(200).json({
          message: "Đổi mật khẩu thành công",
          newUser,
          token
      })
  }
  catch (error) {
      return res.status(400).json({
          message: error.message
      })
  }

}

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
                user: 'havu6544@gmail.com',
                pass: 'nfiz ucuh kmps vkde'
            }
      });
      const mailOptions = {
          from: 'havu6544@gmail.com',
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