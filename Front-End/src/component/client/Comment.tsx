const Comment = () => {
	return (
		<div>
			<div className="section_5">
				<div className="container">
					<div className="product-customer-box">
						<div className="product-customer-title">
							<h2>Khách Hàng Nhận Xét</h2>
						</div>
						<div className="product-customer-content">
							<div className="product-customer-col-1">
								<h4>Đánh Giá Trung Bình</h4>
								<p className="total-review-point">0/5</p>
								<div style={{ textAlign: 'center' }} className="item-rating">
									<p className="comments-count">(0 nhận xét)</p>
								</div>
							</div>
							<div className="product-customer-col-2">
								<div className="item">
									<span className="rating-num">5 sao</span>
									<div className="progress">
										<div style={{ width: '0%' }} className="progress-bar progress-bar-success">
											<span className="sr-only">0% Complete</span>
										</div>
									</div>
									<span className="rating-num-total">0</span>
								</div>
								<div className="item">
									<span className="rating-num">4 sao</span>
									<div className="progress">
										<div style={{ width: '0%' }} className="progress-bar progress-bar-success">
											<span className="sr-only">0% Complete</span>
										</div>
									</div>
									<span className="rating-num-total">0</span>
								</div>
								<div className="item">
									<span className="rating-num">3 sao</span>
									<div className="progress">
										<div style={{ width: '0%' }} className="progress-bar progress-bar-success">
											<span className="sr-only">0% Complete</span>
										</div>
									</div>
									<span className="rating-num-total">0</span>
								</div>
								<div className="item">
									<span className="rating-num">2 sao</span>
									<div className="progress">
										<div style={{ width: '0%' }} className="progress-bar progress-bar-success">
											<span className="sr-only">0% Complete</span>
										</div>
									</div>
									<span className="rating-num-total">0</span>
								</div>
								<div className="item">
									<span className="rating-num">1 sao</span>
									<div className="progress">
										<div style={{ width: '0%' }} className="progress-bar progress-bar-success">
											<span className="sr-only">0% Complete</span>
										</div>
									</div>
									<span className="rating-num-total">0</span>
								</div>
							</div>
							<div className="product-customer-col-3">
								<h4>Chia sẻ nhận xét về sản phẩm</h4>

								<button className="btn btn-default js-customer-button" type="button" id="showconment_click">
									Đóng
								</button>
							</div>
							<div className="cf"></div>
							<h3 className="js-customer-h3" style={{ display: 'block' }} id="conment_1">
								Gửi nhận xét của bạn
							</h3>
							<div className="product-customer-col-4 js-customer-col-4 " style={{ display: 'block' }} id="conment_2">
								<div className="customer-col-5">
									<input type="hidden" id="productset_id" name="productset_id" />
									<div id="rating_wrapper" className="text_bt rate">
										<label>1. Đánh giá của bạn về sản phẩm này:</label>
										<div className="rating-input" id="starproduct" style={{ cursor: 'pointer', width: '100px' }}>
											<img src="./src/assets/client-images/star-off.png" alt="1" title="bad" />
											&nbsp;
											<img src="./src/assets/client-images/star-off.png" alt="2" title="poor" />
											&nbsp;
											<img src="./src/assets/client-images/star-off.png" alt="3" title="regular" />
											&nbsp;
											<img src="./src/assets/client-images/star-off.png" alt="4" title="good" />
											&nbsp;
											<img src="./src/assets/client-images/star-off.png" alt="5" title="gorgeous" />
											<input type="hidden" name="score" />
										</div>
										<input type="hidden" id="rating_out" />
									</div>
									<div id="title_wrapper" className="text_bt title">
										<label htmlFor="review_title">2. Tiêu đề của nhận xét:</label>
										<input
											type="text"
											required
											className="form-control input-sm"
											id="review_title"
											name="title"
											placeholder="Nhập tiêu đề nhận xét"
										/>
										<span id="title_error" className="help-block"></span>
									</div>
									<div id="detail_wrapper" className="text_bt text">
										<label htmlFor="review_detail">3. Viết nhận xét của bạn vào bên dưới:</label>
										<textarea
											rows={10}
											cols={30}
											id="review_detail"
											name="detail"
											className="form-control"
											placeholder="Nhập nội dung nhận xét tại đây. Tối thiểu 100 từ đối với sản phẩm sách, 50 từ đối với sản phẩm các ngành hàng khác, tối đa 2000 từ."
										></textarea>
										<span id="detail_error" className="help-block"></span>
									</div>
									<div className="action">
										<div className="word-counter" style={{ opacity: '0' }}>
											Bạn cần viết đủ <strong>100</strong> từ để gửi nhận xét hợp lệ.
										</div>
										<div style={{ display: 'none' }} className="checkbox">
											<label>
												<input type="checkbox" value="1" id="show_information" />
												Hiển thị thông tin mua hàng trong phần nhận xét
											</label>
										</div>
										<button className="btn btn-default btn-add-review " type="button">
											Gửi nhận xét
										</button>
									</div>
								</div>
							</div>
							<div
								className="product-customer-col-5 js-customer-col-5 "
								style={{ display: 'block' }}
								id="conment_3"
							></div>
						</div>
						<div className="product-review-box">
							<ul className="product-review-tabs nav nav-tabs">
								<li id="review-new1" className="active">
									<a href="#review-new" rel="nofollow">
										Tất Cả Nhận Xét
									</a>
								</li>
								<li id="review-facebook1" className="">
									<a href="#review-facebook" rel="nofollow">
										Thảo Luận
									</a>
								</li>
							</ul>
							<div className="product-review-content tab-content">
								<div id="review-new" className="tab-pane active" role="tabpanel">
									<div className="item">
										<div className="product-col-2"></div>
									</div>
								</div>
								<div id="review-facebook" className="tab-pane" role="tabpanel">
									<div
										className="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
										data-href="http://nhasachminhthang.vn/tieng-anh/6000-tu-vung-tieng-anh-thong-dung-mem--14103-1667.html"
										data-width="925"
										data-numposts="5"
										data-colorscheme="light"
										fb-xfbml-state="rendered"
										fb-iframe-plugin-query="app_id=515780612131147&amp;color_scheme=light&amp;container_width=0&amp;height=100&amp;href=http%3A%2F%2Fnhasachminhthang.vn%2Ftieng-anh%2F6000-tu-vung-tieng-anh-thong-dung-mem--14103-1667.html&amp;locale=vi_VN&amp;numposts=5&amp;sdk=joey&amp;version=v2.0&amp;width=925"
									>
										<span
											style={{
												verticalAlign: 'top',
												width: '0px',
												height: '0px',
												overflow: 'hidden',
											}}
										>
											<iframe
												name="f3a2a226827298"
												width="925px"
												height="100px"
												data-testid="fb:comments Facebook Social Plugin"
												title="fb:comments Facebook Social Plugin"
												frameborder={0}
												allowtransparency="true"
												allowfullscreen="true"
												scrolling="no"
												allow="encrypted-media"
												src="https://www.facebook.com/v2.0/plugins/comments.php?app_id=515780612131147&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df25ed58c30ee454%26domain%3Dnhasachminhthang.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fnhasachminhthang.vn%252Ff3b3ce56e89bcfc%26relation%3Dparent.parent&amp;color_scheme=light&amp;container_width=0&amp;height=100&amp;href=http%3A%2F%2Fnhasachminhthang.vn%2Ftieng-anh%2F6000-tu-vung-tieng-anh-thong-dung-mem--14103-1667.html&amp;locale=vi_VN&amp;numposts=5&amp;sdk=joey&amp;version=v2.0&amp;width=925"
												style={{
													border: 'none',
													visibility: 'visible',
													width: '0px',
													height: '0px',
												}}
											></iframe>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comment;
