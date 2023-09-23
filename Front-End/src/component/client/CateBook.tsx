import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/book";

type Props = {};

const CateBook = (props: Props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data.docs);
    });
  }, []);
  return (
    <div>
      <div className="section_product_hot">
        <div className="container">
          <div className="list-menu_nav list-menu_nav-tr">
            <div className="menu_leght">
              <h1>Sách Ngoại Ngữ</h1>
            </div>
            <div className="form-group">
              <input
                name="category_id"
                style={{ display: "none" }}
                value="244"
              />
              <select
                name="orderby"
                id=""
                className="form-control field-form"
                form="formfill"
              >
                <option value="0">Sắp sếp theo</option>
                <option value="1">Giá tăng dần từ thấp tới cao</option>
                <option value="2">Giá giảm dần từ cao xuống thấp</option>
                <option value="5">Mới nhất</option>
                <option value="6">Cũ nhất</option>
                <option value="7">Nổi bật</option>
              </select>
            </div>
          </div>

          <div className="box-pro-right">
            <div className="list_pro">
              
                {products?.map((product, index) => (
                  <div className="item">
                  <div className="box box-pro">
                  <div className="image">
                    <a href="">
                      <img src={product.imageUrl}/>
                    </a>
                  </div>
                  <div className="info cart-item 60-0">
                    <h3 style={{ fontSize: "14px" }}>
                      <a href="">
                        {product.name}
                      </a>
                    </h3>
                    <div className="wapper-price">
                      <span className="price-old">{product.originalPrice}đ</span>
                      <span className="price-new">{product.promotionalPrice}đ</span>
                    </div>
                    <div className="buy-60-0">
                      <button type="submit" className="buy-now">
                        <a href="" className="add-to-cart">
                          {" "}
                          Thêm vào giỏ hàng{" "}
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                </div>
                ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateBook;
