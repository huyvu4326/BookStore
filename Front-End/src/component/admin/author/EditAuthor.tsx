import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getAuthorById, updateAuthor } from '../../../api/author';

type Props = {}

const EditAuthor = (props: Props) => {
   const { id } = useParams();
   console.log(id);
   const [product, setProduct] = useState([]);
   const { register, handleSubmit, setValue } = useForm();
   useEffect(() => {
     getAuthorById(id)
       .then((response) => {
         setProduct(response.data);
         setValue("name", response.data.name);
         setValue("description", response.data.description);
       })
       .catch((error) => {
         console.error("Lỗi khi lấy thông tin tác giả:", error);
       });
   }, [id, setValue]);
   const onSubmit = (data: any) => {
     const updatedAuthor = {
       _id:id,
       name: data.name,
       description: data.description,
     };
     updateAuthor(updatedAuthor)
       .then((response) => {
         console.log("Sản phẩm đã được cập nhật:", response.data);
       })
       .catch((error) => {
         console.error("Lỗi khi cập nhật sản phẩm:", error);
       });
   };
  return (
    <div>
        <div id="content-page" className="content-page">
            <div className="container-fluid" style={{width: '1200px'}}>
               <div className="row">
                  <div className="col-sm-12">
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Chỉnh sửa tác giả</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="form-group">
                                 <label>Tên tác giả:</label>
                                 <input type="text" className="form-control"  {...register('name')}/>
                              </div>
                              {/* <div className="form-group">
                                 <label>Hồ sơ tác giả:</label>
                                 <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="customFile"/>
                                    <label className="custom-file-label" htmlFor="customFile">Chọn tập tin</label>
                                 </div>
                              </div>
                              <div className="form-group">
                                 <label>Email tác giả:</label>
                                 <input type="email" className="form-control"/>
                              </div> */}
                              <div className="form-group">
                                 <label>Nội dung:</label>
                                 <textarea className="form-control" rows={4}  {...register('description')}></textarea>
                              </div>
                              <button type="submit" className="btn btn-primary">Gửi</button>
                              <button type="reset" className="btn btn-danger">Trở lại</button>
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

export default EditAuthor