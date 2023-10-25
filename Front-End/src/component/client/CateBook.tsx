import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/book";
import { useNavigate } from "react-router-dom";
import { IBookV2 } from "../../interface/book";
import axios from "axios";

type Props = {};

const CateBook = (props: Props) => {
  const navigate = useNavigate();
	const [products, setProducts] = useState<IBookV2[]>([]);
	/* lấy tất cả các book */
	useEffect(() => {
		getProducts().then((response) => {
			setProducts(response.data.docs);
		});
	}, []);

	/* theem vào giỏ hàng */
	const handleAddToCart = async (book: IBookV2) => {
		const data = {
			productId: book._id,
			imageUrl: book.imageUrl,
			name: book.name,
			author: book.author,
			originalPrice: book.originalPrice,
			promotionalPrice: book.promotionalPrice,
			quantity: 1,
		};
		const user = JSON.parse(localStorage.getItem('users') || '{}');
		if (!user) {
			navigate('/signin');
		}
		const cart = {
			userId: user.user._id,
			items: [data],
		};
		try {
			const response = await axios.post('http://localhost:8080/api/cart', cart);
			if (response.status === 200) {
				navigate(`/${user.user._id}/cart`);
			}
		} catch (error) {
			console.log(error);
		}
	};
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
                      <button type="submit" className="buy-now" onClick={() => handleAddToCart(product)}>
                        Thêm vào giỏ hàng
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
