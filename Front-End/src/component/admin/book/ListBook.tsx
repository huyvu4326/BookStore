import React, { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../../../api/book";
import { getCategories } from "../../../api/category";

type Props = {};

const ListBook = (props: Props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data.docs)
    })
  },[])
  useEffect(() => {
    getCategories().then((response) => {
      const categoriesMap = {};
      response.data.forEach((category) => {
        categoriesMap[category._id] = category.name;
      });
      setCategories(categoriesMap)
    });
  },[])
  const onHandleRemove = (id: string|number) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter((item) => item._id !== id));
    });
  };
  return (
    <div>
      <div id="content-page" className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Danh sách sách</h4>
                  </div>
                  <div className="iq-card-header-toolbar d-flex align-items-center">
                    <a href="add-book" className="btn btn-primary">
                      Thêm sách
                    </a>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div className="table-responsive">
                    <table
                      className="data-tables table table-striped table-bordered"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th style={{ width: "3%" }}>STT</th>
                          <th style={{ width: "12%" }}>Hình ảnh</th>
                          <th style={{ width: "15%" }}>Tên sách</th>
                          <th style={{ width: "15%" }}>Thể loại sách</th>
                          <th style={{ width: "15%" }}>Tác giả sách</th>
                          <th style={{ width: "18%" }}>Mô tả sách</th>
                          <th style={{ width: "7%" }}>Giá gốc</th>
                          <th style={{ width: "15%" }}>Hoạt động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products?.map((product, index) => (
                           <tr key={product._id}>
                           <td>{index + 1}</td>
                           <td>
                             <img
                               className="img-fluid rounded"
                               src={product.imageUrl}
                               alt=""
                             />
                           </td>
                           <td>{product.name}</td>
                           <td>{categories[product.categoryId]}</td>
                           <td>{product.author}</td>
                           <td>
                             <p className="mb-0">
                              {product.description}
                             </p>
                           </td>
                           <td>{product.originalPrice}</td>
                           <td>
                             <div className="flex align-items-center list-user-action">
                               <a
                                 className="bg-primary"
                                 data-toggle="tooltip"
                                 data-placement="top"
                                 title=""
                                 data-original-title="Edit"
                                 href={`/admin/edit-book/${product._id}`}
                               >
                                 <i className="ri-pencil-line"></i>
                               </a>
                               <a
                                 className="bg-primary"
                                 data-toggle="tooltip"
                                 data-placement="top"
                                 title=""
                                 data-original-title="Xoá"
                                 onClick={() => {if (window.confirm("Bạn có chắc chắn muốn xóa?")){onHandleRemove(product._id)}}}
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
export default ListBook;
