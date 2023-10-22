import { useEffect, useState } from 'react';

import { IBook } from '../../interface/book';
import axios from 'axios';
import { getProducts } from '../../api/book';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
	const navigate = useNavigate();
	const [products, setProducts] = useState<IBook[]>([]);

	/* lấy tất cả các book */
	useEffect(() => {
		getProducts().then((response) => {
			setProducts(response.data.docs);
		});
	}, []);

	/* theem vào giỏ hàng */
	const handleAddToCart = async (book: IBook) => {
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
						{products?.map((product) => (
							<li key={product._id}>
								<div className="product-home">
									<div className="product_inner">
										<a href={`books/${product._id}/detail`}>
											<img src={product.imageUrl} alt="" />
										</a>
										<div className="product-name">
											<a href={`books/${product._id}/detail`}>{product.name}</a>
										</div>
										<div className="add-cart">
											<p className="price-new">
												{product.promotionalPrice}đ<span className="price-old">{product.originalPrice}đ</span>
											</p>
											<button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
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
