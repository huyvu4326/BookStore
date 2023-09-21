import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/book";

type Props = {};

const ProductList = (props: Props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data.docs)
    })
  },[])
  return (
    <div>
      <div className="banner_home">
        <div className="row">
          <div className="col-lg-9 col-md-9 banner-s">
            <div className="image_banner">
              <img src="./src/assets/client-images/Banner.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-9">
        <div className="list-sp-home">
          <div className="title-list-sp-home">
            <h3></h3>
          </div>
          <ul className="list-noibat">
          {products?.map((product, index) => (
            <li key={product._id}>
            <div className="product-home">
              <div className="product_inner">
                <a href="">
                  <img
                    src="/src/assets/client-images/product-1.png"
                    alt="6000 từ vựng tiếng anh thông dụng (mềm)"
                  />
                </a>
                <div className="product-name">
                  <a href="">{product.name}</a>
                </div>
                <div className="add-cart">
                <p className="price-new">
                  {product.promotionalPrice}đ
                  <span className="price-old">{product.originalPrice}đ</span>
                </p>
                <button
                    className="btn btn-primary"
                  >
                    Add to Cart
                </button>
                </div>
              </div>
            </div>
          </li>
          ))}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
