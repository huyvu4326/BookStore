import { ICart, ICartBody } from '../../interface/cart';
import { addCart, getAllCarts, removeAllCart, removeCart, resetAllCart } from '../../api/cart';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import toast from 'react-hot-toast';

const Cart = () => {
	const { userId } = useParams<{ userId: string }>();
	const navigate = useNavigate();
	const [carts, setCarts] = useState<ICart[]>([]);
	console.log(carts);
	useEffect(() => {
		if (!userId) return;
		const fetchCarts = async () => {
			try {
				const res = await getAllCarts(userId);
				setCarts(res.data.cart.items);
			} catch (error) {
				toast.error('Không thể lấy thông tin giỏ hàng');
			}
		};
		fetchCarts();
	}, []);

	const handleRemoveFromCart = async (productId: string) => {
		if (!userId) return;
		try {
			const response = await removeAllCart(userId, productId);
			if (response.status === 200) {
				toast.success('Xóa sản phẩm khỏi giỏ hàng thành công');
				setCarts(carts.filter((item) => item.productId !== productId));
			}
		} catch (error) {
			toast.error('Không thể xóa sản phẩm khỏi giỏ hàng');
		}
	};

	const handleDecreaseQuantity = async (productId: string) => {
		if (!userId) return;
		try {
			console.log(productId);
			
			const response = await removeCart(userId, productId);
			if (response.status === 200) {
				setCarts(response.data.items);
			}
		} catch (error) {
			toast.error('Không thể giảm số lượng sản phẩm');
		}
	};

	const handleIncreaseQuantity = async (book: any) => {
		const data = {
			...book,
			quantity: 1,
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
				setCarts(response.data.cart.items);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const resetCart = async () => {
		try {
			const user = JSON.parse(localStorage.getItem('users') || '{}');
			if (!user) {
				navigate('/signin');
			}
			const response = await resetAllCart(user.user._id);
			console.log('🚀 ~ file: Cart.tsx:82 ~ resetCart ~ response:', response);
		} catch (error) {
			toast.error('Không thể xóa giỏ hàng');
		}
	};

	return (
		<div>
			<section className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="note-cart">
							<span>Giỏ hàng của bạn</span>
							<span className="amount-pro">{carts && carts.length > 0 ? carts.length : 0} sản phẩm</span>
						</div>

						<div className="cart-main-item-box tab">
							<div className="cart-main-list">
								{/* Hiển thị thông tin sản phẩm trong giỏ hàng */}
								{carts.map((item: ICart) => {
									console.log(item)
									return (
										(
											<div className="cart-main-item cart-item" key={item._id}>
												<div className="cart-main-image-box">
													<div className="cart-main-image">
														<img src={item.imageUrl} alt={item.imageUrl} />
													</div>
												</div>
												<div className="cart-main-content">
													<div className="cart-main-content-title">
														<div className="cart-main-title">
															<span>{item.name}</span>
														</div>
														<div className="cart-main-content-price-box">
															<div className="cart-main-content-price">
																<span>{item.originalPrice.toLocaleString()}₫</span>
															</div>
															<div className="cart-main-content-old-price">
																<span>{item.promotionalPrice.toLocaleString()}₫</span>
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
																	<div className="cart-main-controller">
																		<button className="btn-primary" onClick={() => handleDecreaseQuantity(item.productId)}>
																			-
																		</button>
																		<input
																			min="1"
																			className="number-cart-result number-cart"
																			type="number"
																			name="quantity"
																			value={item.quantity}
																			readOnly
																		/>
																		<button className="btn-primary" onClick={() => handleIncreaseQuantity(item)}>
																			+
																		</button>
																	</div>
																</div>
															</div>
															<div className="delete_all_item">
																<a href="#" className="remove-cart" onClick={() => handleRemoveFromCart(item.productId)}>
																	Loại bỏ
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										)
									)
								})}
							</div>
							<hr />
						</div>
					</div>
					<div className="col-lg-5">
						<div className="info-prod-cart-box">
							<div className="info-cart-title">Tóm tắt đơn hàng</div>

							<div className="value-pro">
								<span className="label" style={{ color: '#000' }}>
									Tổng giá trị đơn hàng
								</span>
								<span className="price-value last-value">
									{/* Tính tổng giá trị đơn hàng từ danh sách sản phẩm trong giỏ hàng */}
									<span>
										{carts.reduce((total, item) => total + item.quantity * item.promotionalPrice, 0).toLocaleString()}
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
