import React, { useEffect, useState } from "react";
import { ICategory } from "../../../interface/category";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../../api/category";
import { addProduct } from "../../../api/book";
import { useForm } from "react-hook-form";
import { message } from "antd";
import Dropzone from "react-dropzone";
import axios from "axios";
type Props = {};

const AddBook = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (value) => {
    addProduct({ ...value, imageUrl: uploadedImageUrl })
      .then((response) => {
        navigate("/admin/list-book");
        message.success("Thêm sản phẩm thành công!");
      })
      .catch((error) => {
        message.error("Thêm sản phẩm thất bại!");
      });
  };
  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {});
  }, []);

  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onImageUpload = (imageUrl) => {
    console.log("Ảnh đã được tải lên:", imageUrl);
  };
  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("image", file);
    setIsLoading(true);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=0aa0e3b122d3aa3b78f125147abc69e5",
        formData
      )
      .then((response) => {
        setUploadedImageUrl(response.data.data.url);
        onImageUpload(response.data.data.url);
      })
      .catch((error) => {
        console.error("Lỗi khi tải ảnh lên:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div id="content-page" className="content-page">
        <div className="container-fluid" style={{ width: "1200px" }}>
          <div className="row">
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Thêm sách</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="bookName">Tên sách:</label>{" "}
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        id="bookName"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">
                          Vui lòng nhập tên sách
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="bookCategory">Danh mục sách:</label>
                      <select
                        id="bookCategory"
                        className="form-control"
                        {...register("categoryId")}
                      >
                        <option value="" disabled>
                          Chọn danh mục sách
                        </option>
                        {categories &&
                          categories.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="bookAuthor">Tác giả:</label>{" "}
                      <input
                        type="text"
                        className={`form-control ${
                          errors.author ? "is-invalid" : ""
                        }`}
                        id="bookAuthor"
                        {...register("author", {required: true})}
                      />
                      {errors.author && (
                        <div className="invalid-feedback">
                          Vui lòng nhập tên tác giả
                        </div>
                      )}
                    </div>
                    <Dropzone onDrop={handleDrop} accept="image/*">
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps()} className="dropzone">
                            <input {...getInputProps()} />
                            {isLoading ? (
                              <p>Đang tải ảnh lên...</p>
                            ) : uploadedImageUrl ? (
                              <img src={uploadedImageUrl} alt="Uploaded" />
                            ) : (
                              <p>Kéo và thả ảnh hoặc nhấn để chọn ảnh</p>
                            )}
                          </div>
                        )}
                      </Dropzone>

                    <div className="form-group">
                      <label htmlFor="bookPrice">Giá gốc:</label>{" "}
                      <input
                        type="text"
                        className={`form-control ${
                          errors.originalPrice ? "is-invalid" : ""
                        }`}
                        id="bookPrice"
                        {...register("originalPrice", {
                          required: true,
                          pattern: {
                            value: /^\d+(\.\d{1,2})?$/,
                            message: "Giá phải là số",
                          },
                        })}
                      />
                      {errors.originalPrice && (
                        <div className="invalid-feedback">
                          {errors.originalPrice.message ||
                            "Vui lòng nhập giá gốc"}
                        </div>
                      )}
                    </div>

                  

                    <div className="form-group">
                      <label htmlFor="bookDescription">Nội dung:</label>{" "}
                      <textarea
                        className={`form-control ${
                          errors.description ? "is-invalid" : ""
                        }`}
                        id="bookDescription"
                        rows={4}
                        {...register("description", {
                          required: true,
                          minLength: {
                            value: 10,
                            message: "Nội dung phải có ít nhất 10 ký tự.",
                          },
                        })}
                      ></textarea>{" "}
                      {errors.description && (
                        <div className="invalid-feedback">
                          {errors.description.message ||
                            "Vui lòng nhập nội dung sách"}
                        </div>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Gửi
                    </button>
                    <button type="reset" className="btn btn-danger">
                      Trở lại
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
