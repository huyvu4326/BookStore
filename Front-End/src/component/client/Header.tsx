import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // kiểm tra token có tồn tại hay không
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // đăng xuất
    navigate("/signin");
  };

  const [userId, setUserId] = useState<string | null>(null); // Sử dụng useState để lưu ID người dùng

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Kiểm tra token có tồn tại hay không
    // Lấy ID người dùng từ localStorage (nếu có)
    const accessToken = localStorage.getItem("users");
    const userId = accessToken ? JSON.parse(accessToken).user._id : null;
    setUserId(userId)
  }, []);

  return (
    <div>
      <div className="header-top">
        <div className="logo-head">
          <div className="image">
            <a href="">
              <img src="./src/assets/client-images/logo1.png" alt="" />
            </a>
          </div>
        </div>
        <ul className="top-bar-nav">
          <li className="link-mxh">
            <div className="search_kh">
              <form className="box_search_kh" method="get" action="">
                <input
                  type="text"
                  name="keyword"
                  placeholder="Bạn muốn tìm sản phẩm"
                  // required=""
                  // fdprocessedid="d883u"
                />
                <button
                  className="btn-search-color"
                  type="submit"
                  name="submit"
                  // fdprocessedid="vtnjdm"
                >
                  Tìm
                </button>
              </form>
            </div>
          </li>
        </ul>
        <div className="contact_about">
          <div className="hotline_top">
            <div className="icon_call">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="phone_number">
              <a href="tel:0907009789">0907009789</a>
            </div>
          </div>
          <ul className="icon-navbar">
            <li className="link-mxh">
              <a className="box-cart">
                <Link to={`${userId}/cart`}>
                  <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                </Link>
                <p className="count-cart cart"> 0 </p>
              </a>
            </li>
            <div
              className="box-header-main-right h-cart"
              style={{ display: "none" }}
            >
              {/* <div className="list-product css-19k9yp8">
                <div className="wrapper">
                  <div className="body">
                    <span>Chưa có sản phẩm trong giỏ hàng!!</span>
                  </div>
                  <div className="cart__bottom">
                    <div className="cart__bottom-box">
                      <a href="">
                        <button type="button" className="cart__btn-more">
                          <span>Mua sắm ngay</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <li className="link_sign_in">
              {isLoggedIn ? (
                <button className="btn btn-primary" onClick={handleLogout}>
                  Đăng xuất
                </button>
              ) : (
                <Link to="/signin" className="btn-sign_in">
                  <button className="btn btn-primary">Đăng nhập</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="header_bottom">
        <div className="menu menu-desktop">
          <ul className="left_menu">
            <li>
              <a href="/">TRANG CHỦ</a>
            </li>
            <li>
              <a href="">GIỚI THIỆU</a>
            </li>
            <li>
              <a href="">HỖ TRỢ KHÁCH HÀNG</a>
            </li>
            <li>
              <a href="category">DANH MỤC SẢN PHẨM</a>
            </li>
            <li>
              <a href="">TIN TỨC</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
