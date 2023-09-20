import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
        <div className="header-top">
                    <div className="logo-head">
                        <div className="image">
                            <a href="">
                                <img src="../images/logo1.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <ul className="top-bar-nav">
                        <li className="link-mxh">
                            <div className="search_kh">
                                <form className="box_search_kh" method="get" action="">

                                    <input type="text" name="keyword" placeholder="Bạn muốn tìm sản phẩm" required=""
                                        fdprocessedid="d883u"/>
                                    <button className="btn-search-color" type="submit" name="submit" fdprocessedid="vtnjdm">
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
                                <a className="box-cart" href="cart"><i
                                        className="fas fa-shopping-cart" aria-hidden="true"></i>
                                    <p className="count-cart cart"> 0 </p>

                                </a>
                            </li>

                            <div className="box-header-main-right h-cart" style={{display:"none"}}>
                                <div className="list-product css-19k9yp8">
                                    <div className="wrapper">
                                        <div className="body">
                                            <span>Chưa có sản phẩm trong giỏ hàng!!</span>
                                        </div>
                                        <div className="cart__bottom">
                                            <div className="cart__bottom-box">
                                                <a href="https://cus11.largevendor.com">
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
                                <a className="btn-sign_in"><i className="fas fa-user" aria-hidden="true"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="header_bottom">
                    <div className="menu menu-desktop">
                        {/* <div className="all-categories">
                            <div className="g-tab"><span><i className="fa-solid fa-bars"></i>Tất cả danh mục</span></div>

                        </div> */}
                        <ul className="left_menu">
                            <li><a href="">TRANG CHỦ</a></li>
                            <li><a href="">GIỚI THIỆU</a></li>
                            <li><a href="">HỖ TRỢ KHÁCH HÀNG</a></li>
                            <li><a href="">DANH MỤC SẢN PHẨM</a></li>
                            <li><a href="">TIN TỨC</a></li>

                        </ul>
                    </div>
                </div>
    </div>
  );
};

export default Header;
