import React, { useState, useEffect } from "react";
import { getCartOfUser } from "../../api/cart";

type Props = {};

const Cart = (props: Props) => {
  const [cartItems, setCartItems] = useState([]); // State lưu trữ danh sách sản phẩm trong giỏ hàng

  useEffect(() => {
    const cartItemFromAPI = getCartOfUser();
    setCartItems(cartItemFromAPI); 
  }, []);
  const handleRemoveFromCart = (productId) => {
    // Cập nhật danh sách sản phẩm trong giỏ hàng sau khi xóa
    // Ví dụ: const updatedCartItems = cartItems.filter(item => item.productId !== productId);
    // setCartItems(updatedCartItems);
  };

  return (
    <div>
      <section className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="note-cart">
              <span>Giỏ hàng của bạn</span>
              <span className="amount-pro">{cartItems.length} sản phẩm</span>
            </div>

            <div className="cart-main-item-box tab">
              {cartItems.map((item) => (
                <div className="cart-main-item cart-item" key={item.id}>
                  {/* Hiển thị thông tin sản phẩm trong giỏ hàng */}
                  <div className="cart-main-image-box">
                    <div className="cart-main-image">
                      <img src={item.imageUrl} alt={item.name} />
                    </div>
                  </div>
                  <div className="cart-main-content">
                    <div className="cart-main-content-title">
                      <div className="cart-main-title">
                        <span>{item.name}</span>
                      </div>
                      <div className="cart-main-content-price-box">
                        <div className="cart-main-content-price">
                          <span>₫{item.promotionalPrice}</span>
                        </div>
                        <div className="cart-main-content-old-price">
                          <s>₫{item.originalPrice}</s>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="cart-main-content-box">
                      <div className="cart-main-content-box-select-color-quantity">
                        <div className="quantity-cart-main">
                          <div className="cart-main-content-select-color">
                            {/* Hiển thị thông tin màu sắc (nếu có) */}
                          </div>
                          <div className="box-quantity-main">
                            <label>Số lượng: </label>
                            <input
                              min="1"
                              className="number-cart-result number-cart"
                              type="number"
                              name="quantity"
                              value={item.quantity}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="delete_all_item">
                          <a
                            href="#"
                            className="remove-cart"
                            onClick={() => handleRemoveFromCart(item.productId)}
                          >
                            Loại bỏ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <hr />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info-prod-cart-box">
              <div className="info-cart-title">Tóm tắt đơn hàng</div>

              <div className="value-pro">
                <span className="label">Tổng giá trị đơn hàng</span>
                <span className="price-value last-value">
                  {/* Tính tổng giá trị đơn hàng từ danh sách sản phẩm trong giỏ hàng */}
                  <span>
                    ₫
                    {cartItems.reduce(
                      (total, item) =>
                        total + item.quantity * item.promotionalPrice,
                      0
                    )}
                  </span>
                  <span className="unit">₫</span>
                </span>
              </div>

              <div className="neext-step-box">
                <a href="">Tiến hành thanh toán</a>
              </div>
              <div className="sp-pay-box">
                <div className="sp-pay-title">Hỗ trợ thanh toán</div>
                <ul>
                  <li>
                    <span>Thanh toán khi nhận hàng/Thanh toán sau</span>
                  </li>
                  <li>
                    <span>Thanh toán tại cửa hàng</span>
                  </li>

                  <li>
                    <span>Thanh toán bằng thẻ ATM/mã QR/Ví điện tử</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
