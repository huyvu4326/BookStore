import React, { useEffect, useState } from 'react';
import { deleteCategories, getCategories } from '../../../api/category';
import { getProducts } from '../../../api/book';

type Props = {};

const ListCate = (props: Props) => {
	const [categories, setCategories] = useState([]);
	const onHandleRemove = (key: string | number) => {
		deleteCategories(key)
			.then(() => {
				setCategories(categories.filter((item) => item._id !== key));
			})
			.catch((error) => {
				console.error(error);
			});
	};
	useEffect(() => {
		getCategories()
			.then((response) => {
				const data = response.data.docs || response.data;
				setCategories(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return (
		<div>
			<div id="content-page" className="content-page">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<div className="iq-card">
								<div className="iq-card-header d-flex justify-content-between">
									<div className="iq-header-title">
										<h4 className="card-title">Danh sách danh mục</h4>
									</div>
									<div className="iq-card-header-toolbar d-flex align-items-center">
										<a href="add-cate" className="btn btn-primary">
											Thêm danh mục mới
										</a>
									</div>
								</div>
								<div className="iq-card-body">
									<div className="table-responsive">
										<table className="data-tables table table-striped table-bordered" style={{ width: '100%' }}>
											<thead>
												<tr>
													<th style={{ width: '5%' }}>STT</th>
													<th style={{ width: '20%' }}>Tên danh mục</th>
													<th style={{ width: '10%' }}>Hoạt động</th>
												</tr>
											</thead>
											<tbody>
												{categories?.map((category, index) => (
													<tr key={category._id}>
														<td>{index + 1}</td>
														<td>{category.name}</td>
														<td>
															<div className="flex align-items-center list-user-action">
																<a
																	className="bg-primary"
																	data-toggle="tooltip"
																	data-placement="top"
																	title=""
																	data-original-title="Sửa"
																	href={`/admin/${category._id}/edit-cate`}
																>
																	<i className="ri-pencil-line"></i>
																</a>
																<a
																	className="bg-primary"
																	data-toggle="tooltip"
																	data-placement="top"
																	title=""
																	data-original-title="Xoá"
																	onClick={() => {
																		if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
																			onHandleRemove(category._id);
																		}
																	}}
																>
																	<i className="ri-delete-bin-line"></i>
																</a>
															</div>
														</td>
													</tr>
												))}
											</tbody>
										</table>
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

export default ListCate;
