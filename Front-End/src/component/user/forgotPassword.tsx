import React, { useState } from "react";
import { forgotPassword } from "../../api/user";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";

type Props = {};

const ForgotPassword = (props: Props) => {
    // const { token } = useParams();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    if (!email) {
      message.error("Vui lòng nhập địa chỉ email.");
      return;
    }
    forgotPassword(email)
      .then((response) => {
        message.success(
          "Yêu cầu đặt lại mật khẩu đã được gửi đến email của bạn."
        );
        navigate(`/resetPassword`);
      })
      .catch((error) => {
        message.error("Có lỗi xảy ra khi gửi yêu cầu đặt lại mật khẩu.");
      });
  };
  return (
    <div>
      <div
        className="card text-center"
        style={{ width: "300px", margin: "0 auto" }}
      >
        <div className="card-header h5 text-white bg-primary">
          Password Reset
        </div>
        <div className="card-body px-5">
          <p className="card-text py-2">
            Enter your email address and we'll send you an email with
            instructions to reset your password.
          </p>
          <div className="form-outline">
            <input
              type="email"
              id="typeEmail"
              className="form-control my-3"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange} // Gọi hàm handleEmailChange khi người dùng nhập email
            />
          </div>
          <button
            className="btn btn-primary w-100"
            onClick={handleSubmit} // Gọi hàm handleSubmit khi người dùng nhấn nút
          >
            Reset password
          </button>
          <div className="d-flex justify-content-between mt-4">
            <a className="" href="signin">
              Login
            </a>
            <a className="" href="signup">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
