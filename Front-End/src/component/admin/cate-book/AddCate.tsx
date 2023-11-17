import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../../api/category";
import { message } from "antd";

type Props = {};

const AddCate = (props: Props) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (value) => {
    console.log(value);
    addCategory(value)
      .then((response) => {
        console.log(response);
        message.success('Thêm danh mục thành công');
        navigate("/admin/list-cate-book");
      })
      .catch((error) => {
        message.error('Lỗi khi thêm danh mục');
      });
  };
  return (
    <div>
      <div id="content-page" className="content-page">
        <div className="container-fluid" style={{ width: "1200px" }}>
          <div className="row">
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Thêm danh mục</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label>Tên danh mục:</label>
                      <input type="text" className="form-control" {...register('name')}/>
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

export default AddCate;
