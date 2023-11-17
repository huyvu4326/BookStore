import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCategoryById, updateCategory } from '../../../api/category';
import { ICategory } from '../../../interface/category';
import { useForm } from 'react-hook-form';
import { message } from 'antd';

type Props = {}

const EditCate = (props: Props) => {
   const { id } = useParams();
   console.log(id);
   const [categories, setCategories] = useState<ICategory[]>([]);
   const { register, handleSubmit, setValue } = useForm();
   useEffect(() => {
     getCategoryById(id)
       .then((response) => {
         setCategories(response.data);
         setValue("name", response.data.name);
         setValue("description", response.data.description);
       })
       .catch((error) => {
         console.error("Lỗi khi lấy thông tin danh mục:", error);
       });
   }, [id, setValue]);
   const onSubmit = (data: any) => {
     const update = {
       id: data.id,
       name: data.name,
       description: data.description,
     };
     updateCategory(update)
       .then((response) => {
         message.success("Danh mục đã được cập nhật");
       })
       .catch((error) => {
         console.error("Lỗi khi cập nhật danh mục:", error);
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
  )
}

export default EditCate