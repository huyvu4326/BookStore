import { ICartBody, ICartResponse } from '../../interface/cart';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { IBookV2 } from '../../interface/book';
import { addCart } from '../../api/cart';
import { getProductById } from '../../api/book';

const Detail_1 = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<IBookV2>({} as IBookV2); // Thay any bằng kiểu dữ liệu thích hợp
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();

	/* get one */
	useEffect(() => {
		getProductById(id!).then((response) => {
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

	/* thêm giở hàng */
	const handleAddToCart = async (book: IBookV2) => {
		const data = {
			productId: book._id,
			imageUrl: book.imageUrl,
			name: book.name,
			author: book.author,
			originalPrice: book.originalPrice,
			quantity,
		};
		const user = JSON.parse(localStorage.getItem('users') || '{}');
		if (!user) {
			navigate('/signin');
		}
		const cart = {
			userId: user.user._id,
			items: [data],
		} as ICartBody;
		try {
			const response = await addCart(cart);
			if (response.status === 200) {
				navigate(`/${user.user._id}/cart`);
			}
		} catch (error) {
			console.log(error);
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
											<img className="img_clik_show" src={product.imageUrl} alt="" />
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-10 col-xl-10">
									<div className="slider autoplay1-detail">
										<div className="image">
											<a href="" data-fancybox="image">
												<img
													style={{ width: '500px', height: '500px' }}
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
													width: '0px',
													transform: 'translate3d(0px, 0px, 0px)',
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
										Tác giả: <strong>{product.author}</strong>
									</p>

									<div className="rating">
										<div style={{ marginBottom: '5px', marginLeft: '0' }} className="col_detail">
											<span style={{ float: 'left' }}>Đánh giá: </span>
											<div id="star" style={{ cursor: 'pointer', width: '100px' }}>
												<i className="fas fa-star vang" aria-hidden="true"></i>
												<i className="fas fa-star vang" aria-hidden="true"></i>
												<i className="fas fa-star vang" aria-hidden="true"></i>
												<i className="fas fa-star vang" aria-hidden="true"></i>
												<i className="fas fa-star vang" aria-hidden="true"></i>
											</div>
										</div>
									</div>
									<p>
										Giá bán: <span className="price_km">{product.originalPrice} ₫</span>
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
											marginBottom: '10px',
											color: 'rgb(130, 130, 130)',
											fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
											fontSize: '14px',
											lineHeight: '20.8px',
											paddingLeft: '20px',
										}}
									>
										Miễn phí vận chuyển cho đơn hàng trên&nbsp;
										<span
											style={{
												padding: '0',
												boxSizing: 'border-box',
												color: 'rgb(255, 0, 0)',
												fontWeight: 'bold',
											}}
										>
											400.000 VNĐ
										</span>
									</p>
									<p
										style={{
											boxSizing: 'border-box',
											margin: '0px 0px 10px',
											color: 'rgb(130, 130, 130)',
											fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
											fontSize: '14px',
											lineHeight: '20.8px',
											paddingLeft: '20px',
										}}
									>
										<span
											style={{
												padding: '0',
												boxSizing: 'border-box',
												color: 'rgb(255, 0, 0)',
												fontWeight: 'bold',
											}}
										>
											Chiết khấu cao cho các đại lý và khách đặt sỉ
										</span>
									</p>
									<p
										style={{
											boxSizing: 'border-box',
											margin: '0px 0px 10px',
											color: 'rgb(130, 130, 130)',
											fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
											fontSize: '14px',
											lineHeight: '20.8px',
											paddingLeft: '20px',
										}}
									>
										<span
											style={{
												padding: '0',
												color: 'rgb(255, 0, 0)',
												fontWeight: 'bold',
												fontFamily: 'Arial, Verdana, sans-serif',
												fontSize: '12px',
											}}
										>
											→&nbsp;
										</span>
										Giao hàng trên Toàn Quốc
									</p>
									<p
										style={{
											boxSizing: 'border-box',
											margin: '0px 0px 10px',
											color: 'rgb(130, 130, 130)',
											fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
											fontSize: '14px',
											lineHeight: '20.8px',
											paddingLeft: '20px',
										}}
									>
										<span
											style={{
												padding: '0',
												boxSizing: 'border-box',
												color: 'rgb(255, 0, 0)',
												fontWeight: 'bold',
											}}
										></span>
										<span
											style={{
												padding: '0',
												fontFamily: 'Arial, Verdana, sans-serif',
												fontSize: '12px',
												color: 'rgb(255, 0, 0)',
												fontWeight: 'bold',
											}}
										>
											→&nbsp;
										</span>
										Đặt online hoặc gọi ngay:&nbsp;
										<span
											style={{
												padding: '0',
												boxSizing: 'border-box',
												color: 'rgb(255, 0, 0)',
												outline: 'none',
												cursor: 'pointer',
												fontWeight: 'bold',
											}}
										>
											<span
												style={{
													padding: '0',
													boxSizing: 'border-box',
													fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
												}}
											>
												0932321719
											</span>
										</span>
									</p>
									<p
										style={{
											boxSizing: 'border-box',
											margin: '0px 0px 10px',
											color: 'rgb(130, 130, 130)',
											fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
											fontSize: '14px',
											lineHeight: '20.8px',
											paddingLeft: '20px',
										}}
									>
										<span
											style={{
												padding: '0',
												boxSizing: 'border-box',
												color: 'rgb(255, 0, 0)',
												fontWeight: 'bold',
											}}
										>
											<span
												style={{
													padding: '0',
													fontFamily: 'Arial, Verdana, sans-serif',
													fontSize: '12px',
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
						<p>{product.description}</p>
						<div className="product-action-repeat">
							<button type="button" className="btn btn_checkout" onClick={() => handleAddToCart(product)}>
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
