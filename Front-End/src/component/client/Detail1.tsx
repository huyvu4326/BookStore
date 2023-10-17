import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/book";
// import { addItemCart } from "../../api/cart";

type Props = {};

const Detail_1 = (e) => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>({}); // Thay any bằng kiểu dữ liệu thích hợp
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    getProductById(id).then((response) => {
      setProduct(response.data);
    });
  }, [id, quantity]);

  const increaseQuantity = () => {
    if (quantity < 999) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <div className="section_4">
        <div className="container">
          <div className="box_info_prod_main">
            <div className="info_left">
              <div className="row all_nav_imgditel">
                <div className="col-12 col-lg-2 col-xl-2 img_nav_destop">
                  <div className="img_nav">
                    <div className="img_item">
                      <img
                        className="img_clik_show"
                        src={product.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-10 col-xl-10">
                  <div className="slider autoplay1-detail">
                    <div className="image">
                      <a href="" data-fancybox="image">
                        <img
                          style={{ width: "500px", height: "500px" }}
                          className="expandedImg"
                          id="imageid"
                          src={product.imageUrl}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-2 col-xl-2 img_nav_mobi">
                  <div className="img_nav auto_tintuc_home slick-initialized slick-slider">
                    <div aria-live="polite" className="slick-list draggable">
                      <div
                        className="slick-track"
                        role="listbox"
                        style={{
                          opacity: 1,
                          width: "0px",
                          transform: "translate3d(0px, 0px, 0px)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="info_detail">
              <h1>{product.name}</h1>
              <div className="item-row1">
                <div className="item_left">
                  <p>
                    Tác giả:{" "}
                    <strong>
                      <a
                        href="/tac-gia/nguyen-thi-thu-hue-1695.html"
                        title="Bùi Văn Vinh (chủ biên) - Thái Vân Anh - Đỗ Thị Lan Anh - Nguyễn Thị Phương Anh"
                      >
                        {product.author}
                      </a>{" "}
                    </strong>
                  </p>

                  <div className="rating">
                    <div
                      style={{ marginBottom: "5px", marginLeft: "0" }}
                      className="col_detail"
                    >
                      <span style={{ float: "left" }}>Đánh giá: </span>
                      <div
                        id="star"
                        style={{ cursor: "pointer", width: "100px" }}
                      >
                        <i className="fas fa-star vang" aria-hidden="true"></i>
                        <i className="fas fa-star vang" aria-hidden="true"></i>
                        <i className="fas fa-star vang" aria-hidden="true"></i>
                        <i className="fas fa-star vang" aria-hidden="true"></i>
                        <i className="fas fa-star vang" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    Giá bìa:{" "}
                    <span className="price_cost">
                      {product.originalPrice} ₫
                    </span>
                  </p>
                  <p>
                    Giá bán: <span className="price_km">{product.promotionalPrice} ₫</span>
                  </p>

                  <p>
                    Tình trạng:
                    <span className="status_conhang">Có hàng</span>
                  </p>
                </div>
                <div className="item-other">
                  <p></p>
                  <p>
                    <strong>NXB: </strong>NXB Đại Học Quốc Gia Hà Nội
                  </p>
                  <p>
                    <strong>Năm xuất bản</strong>: 2023
                  </p>
                  <p>
                    <strong>Dạng bìa</strong>: bìa mềm
                  </p>
                  <p>
                    <strong>Số trang:</strong> 340 trang
                  </p>
                  <p>
                    <strong>Kích thước:</strong> 9,3 x 15 cm
                  </p>
                  <p>
                    <strong>Trọng lượng:</strong> 350 gr
                  </p>
                  <p></p>
                </div>
              </div>

              <div className="item-promotion">
                <div className="item-promotion-title">
                  <h2>Thông tin &amp; Khuyến mãi</h2>
                </div>
                <div className="item-promotion-content">
                  <p
                    style={{
                      marginBottom: "10px",
                      color: "rgb(130, 130, 130)",
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20.8px",
                      paddingLeft: "20px",
                    }}
                  >
                    Miễn phí vận chuyển cho đơn hàng trên&nbsp;
                    <span
                      style={{
                        padding: "0",
                        boxSizing: "border-box",
                        color: "rgb(255, 0, 0)",
                        fontWeight: "bold",
                      }}
                    >
                      400.000 VNĐ
                    </span>
                  </p>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px 0px 10px",
                      color: "rgb(130, 130, 130)",
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20.8px",
                      paddingLeft: "20px",
                    }}
                  >
                    <span
                      style={{
                        padding: "0",
                        boxSizing: "border-box",
                        color: "rgb(255, 0, 0)",
                        fontWeight: "bold",
                      }}
                    >
                      Chiết khấu cao cho các đại lý và khách đặt sỉ
                    </span>
                  </p>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px 0px 10px",
                      color: "rgb(130, 130, 130)",
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20.8px",
                      paddingLeft: "20px",
                    }}
                  >
                    <span
                      style={{
                        padding: "0",
                        color: "rgb(255, 0, 0)",
                        fontWeight: "bold",
                        fontFamily: "Arial, Verdana, sans-serif",
                        fontSize: "12px",
                      }}
                    >
                      →&nbsp;
                    </span>
                    Giao hàng trên Toàn Quốc
                  </p>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px 0px 10px",
                      color: "rgb(130, 130, 130)",
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20.8px",
                      paddingLeft: "20px",
                    }}
                  >
                    <span
                      style={{
                        padding: "0",
                        boxSizing: "border-box",
                        color: "rgb(255, 0, 0)",
                        fontWeight: "bold",
                      }}
                    ></span>
                    <span
                      style={{
                        padding: "0",
                        fontFamily: "Arial, Verdana, sans-serif",
                        fontSize: "12px",
                        color: "rgb(255, 0, 0)",
                        fontWeight: "bold",
                      }}
                    >
                      →&nbsp;
                    </span>
                    Đặt online hoặc gọi ngay:&nbsp;
                    <span
                      style={{
                        padding: "0",
                        boxSizing: "border-box",
                        color: "rgb(255, 0, 0)",
                        outline: "none",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      <span
                        style={{
                          padding: "0",
                          boxSizing: "border-box",
                          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        }}
                      >
                        0932321719
                      </span>
                    </span>
                  </p>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px 0px 10px",
                      color: "rgb(130, 130, 130)",
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20.8px",
                      paddingLeft: "20px",
                    }}
                  >
                    <span
                      style={{
                        padding: "0",
                        boxSizing: "border-box",
                        color: "rgb(255, 0, 0)",
                        fontWeight: "bold",
                      }}
                    >
                      <span
                        style={{
                          padding: "0",
                          fontFamily: "Arial, Verdana, sans-serif",
                          fontSize: "12px",
                        }}
                      >
                        →&nbsp;
                      </span>
                      Chiết khấu cao cho các đại lý và khách đặt sỉ
                    </span>
                  </p>
                </div>
              </div>

              <div className="info_dt_payment floatl">
                <div className="bdetail_no">
                  <span>Số lượng</span>
                  <button onClick={decreaseQuantity}>-</button>
                  <input
                    type="text"
                    name="idsoluong"
                    id="idsoluong"
                    value={quantity}
                    className="bd_book_no"
                    // fdprocessedid="4y7ipg"
                  />
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <div className="bdetail_scart">
                  <button
                    className="btn btn-checkout"
                    // fdprocessedid="ffkxc"
                    onClick={addToCart}
                  >
                      Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="desc_product">
            <div className="title_desc">
              <h3>Mô tả</h3>
            </div>
            <p>
              {product.description}
            </p>
            <div className="product-action-repeat">
              <button type="button" className="btn btn_checkout">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_1;
