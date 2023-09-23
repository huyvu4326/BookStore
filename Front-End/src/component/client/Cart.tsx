import React, { useState } from "react";

type Props = {};

const Cart = (props: Props) => {
  const [cart, setCart] = useState([]);
  const handleQuantityChange = (event, product) => {
    const updatedCart = [...cart];
    const updatedProduct = updatedCart.find((item) => item.id === product.id);
    updatedProduct.quantity = parseInt(event.target.value, 10);
    setCart(updatedCart);
  };
  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };
  return (
    <div>
      <section className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="note-cart">
              <span>Giỏ hàng của bạn</span>
              <span className="amount-pro"> 1 sản phẩm</span>
            </div>

            <div className="cart-main-item-box tab">
              {cart.map((product) => (
                <div className="cart-main-item cart-item" key={product.id}>
                  {/* Hiển thị thông tin sản phẩm trong giỏ hàng */}
                  <div className="cart-main-image-box">
                    <div className="cart-main-image">
                      <img src={product.imageUrl} alt={product.name} />
                    </div>
                  </div>
                  <div className="cart-main-content">
                    <div className="cart-main-content-title">
                      <div className="cart-main-title">
                        <span>{product.name}</span>
                      </div>
                      <div className="cart-main-content-price-box">
                        <div className="cart-main-content-price">
                          <span>{product.price}₫</span>
                        </div>
                        <div className="cart-main-content-old-price">
                          <s>{product.oldPrice}₫</s>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="cart-main-content-box">
                      <div className="cart-main-content-box-select-color-quantity">
                        <div className="quantity-cart-main">
                          <div className="cart-main-content-select-color">
                            {product.author}
                          </div>
                          <div className="box-quantity-main">
                            <label>Số lượng: </label>
                            <input
                              min="1"
                              className="number-cart-result number-cart"
                              type="number"
                              name="quantity"
                              value={product.quantity}
                              onChange={(event) =>
                                handleQuantityChange(event, product)
                              }
                            />
                          </div>
                        </div>
                        <div className="delete_all_item">
                          <a
                            href="#"
                            className="remove-cart"
                            onClick={() => handleRemoveFromCart(product)}
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
                <span>{calculateTotalPrice()}</span>
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
