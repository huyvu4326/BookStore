import { message } from "antd";
import React, { useState } from "react";
import { resetPassword } from "../../api/user";
import { useNavigate } from "react-router-dom";

const ResetPassword = (e) => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault()
    if (!token || !password || !confirmPassword) {
      message.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (password !== confirmPassword) {
      message.error("Mật khẩu mới và xác nhận mật khẩu không khớp.");
      return;
    }
    resetPassword(token, password)
      .then((response) => {
        message.success("Mật khẩu mới đã được cập nhật.");
        navigate("/signin");
      })
      .catch((error) => {
        message.error("Có lỗi xảy ra khi thay đổi mật khẩu.");
      });
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Thay đổi mật khẩu</div>
              <div className="card-body">
                <form onSubmit={onHandleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      Mã thay đổi
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="token"
                      placeholder="Nhập mã đổi mật khẩu"
                      value={token}
                      onChange={handleTokenChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Nhập mật khẩu mới"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Nhập lại mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Nhập lại mật khẩu"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Thay đổi mật khẩu
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
