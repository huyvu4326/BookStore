import React from "react";

type Props = {};

const Header = (props: Props) => {
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
                  required=""
                  fdprocessedid="d883u"
                />
                <button
                  className="btn-search-color"
                  type="submit"
                  name="submit"
                  fdprocessedid="vtnjdm"
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
              <a className="box-cart" href="cart">
                <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                <p className="count-cart cart"> 0 </p>
              </a>
            </li>

            <div
              className="box-header-main-right h-cart"
              style={{ display: "none" }}
            >
              <div className="list-product css-19k9yp8">
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
              </div>
            </div>
            <li className="link_sign_in">
              <a className="btn-sign_in">
                <i className="fas fa-user" aria-hidden="true"></i>
              </a>


    <div className="model-login">
            <div className="box_model-login">
                <div className="user-form-card">
                <div className="btn-close-modal">
                        <i className="fas fa-times-circle" aria-hidden="true"></i>
                </div>
                <div className="user-form-title">
                    <h2>Đăng nhập</h2>
                </div>
                <form className="user-form">
                <div id="loadListErrorLogin_header"></div>
                <input type="hidden" name="_token" value="V920m5VJV2WTSCqZt5vZkzREQY11YM8JwnlsWKsH"/>                <div className="form-group">
                    <input type="text" name="username" value="" className="form-control  " placeholder="Tên đăng nhập" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control  " placeholder="Mật khẩu" />
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input  " type="checkbox" value="" id="check" />
                    <label className="form-check-label" for="check">Nhớ mật khẩu</label>
                </div>
                <div className="form-button">
                    <button type="submit">Đăng nhập</button>
                    <a className="btn btn-link" href="/password/reset" target="blank">
                        Quên mật khẩu
                    </a>
                </div>
                <div class="user-form-remind">
                <p>Bạn chưa có tài khoản?<a class="btnshownav-dangky-tr">Đăng ký</a></p>
            </div>
            </form>
                
                </div>
            </div>
    </div>

    {/* đăng ký  */}

    <div className="model-logins">
            <div className="box_model-login">
                <div className="user-form-card">
                <div className="btn-close-modal">
                        <i className="fas fa-times-circle" aria-hidden="true"></i>
                </div>
                <div className="user-form-title">
                    <h2>Đăng nhập</h2>
                </div>
                <form className="user-form">
                <div id="loadListErrorLogin_header"></div>
                <input type="hidden" name="_token" value="V920m5VJV2WTSCqZt5vZkzREQY11YM8JwnlsWKsH"/>                <div className="form-group">
                    <input type="text" name="username" value="" className="form-control  " placeholder="Tên đăng nhập" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control  " placeholder="Mật khẩu" />
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input  " type="checkbox" value="" id="check" />
                    <label className="form-check-label" for="check">Nhớ mật khẩu</label>
                </div>
                <div className="form-button">
                    <button type="submit">Đăng nhập</button>
                    <a className="btn btn-link" href="/password/reset" target="blank">
                        Quên mật khẩu
                    </a>
                </div>
                <div class="user-form-remind">
                <p>Bạn chưa có tài khoản?<a class="btnshownav-dangky-tr">Đăng ký</a></p>
            </div>
            </form>
                
                </div>
            </div>
    </div>

    {/* đăng ký  */}

            </li>
          </ul>
        </div>
      </div>
      <div className="header_bottom">
        <div className="menu menu-desktop">
          <ul className="left_menu">
            <li>
              <a href="home">TRANG CHỦ</a>
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
