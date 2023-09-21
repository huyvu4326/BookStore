import React from 'react'

type Props = {}

const Cart = (props: Props) => {
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
            <div className="cart-main-item cart-item">
              <div className="cart-main-image-box">
                <div className="cart-main-image">
                  <img
                    src="/src/assets/client-images/sach-4.png"
                    alt="The langmaster - 360 động từ bất quy tắc và cách dùng thì tiếng Anh - màu (tái bản 05)"
                  />
                </div>
              </div>
              <div className="cart-main-content">
                <div className="cart-main-content-title">
                  <div className="cart-main-title">
                    <span
                      >The langmaster - 360 động từ bất quy tắc và cách dùng thì
                      tiếng Anh - màu (tái bản 05)
                    </span>
                  </div>
                  <div className="cart-main-content-price-box">
                    <div className="cart-main-content-price">
                      <span>40,000</span> <span className="unit">₫</span>
                    </div>
                    <div className="cart-main-content-old-price">
                      <s>32,000 ₫</s>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="cart-main-content-box">
                  <div className="cart-main-content-box-select-color-quantity">
                    <div className="quantity-cart-main">
                      <div className="cart-main-content-select-color">
                        (Nguyễn Thị Thu Huế)
                      </div>
                      <div className="box-quantity-main">
                        <label>Số lượng: </label>
                        <input
                          min="1"
                          className="number-cart-result number-cart"
                          value="1"
                          type="number"
                          name="quantity"
                        />
                      </div>
                    </div>

                    <div className="delete_all_item">
                      <a href="" className="remove-cart">Loại bỏ </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="info-prod-cart-box">
            <div className="info-cart-title">Tóm tắt đơn hàng</div>

            <div className="value-pro">
              <span className="label">Tổng giá trị đơn hàng</span>
              <span className="price-value last-value"
                ><span>40,000</span><span className="unit">₫</span></span
              >
            </div>

            <div className="value-pro">
              <span className="label">Tổng tiền trước giảm</span>
              <span className="price-value"
                ><span>40,000</span><span className="unit">₫</span></span
              >
            </div>


            <div className="neext-step-box">
              <a href=""
                >Tiến hành thanh toán</a
              >
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
  )
}

export default Cart