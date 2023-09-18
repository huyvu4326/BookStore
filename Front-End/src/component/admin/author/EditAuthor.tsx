import React from 'react'

type Props = {}

const EditAuthor = (props: Props) => {
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
                           <form action="admin-author.html">
                              <div className="form-group">
                                 <label>Tên tác giả:</label>
                                 <input type="text" className="form-control"/>
                              </div>
                              <div className="form-group">
                                 <label>Hồ sơ tác giả:</label>
                                 <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="customFile"/>
                                    <label className="custom-file-label" htmlFor="customFile">Chọn tập tin</label>
                                 </div>
                              </div>
                              <div className="form-group">
                                 <label>Email tác giả:</label>
                                 <input type="email" className="form-control"/>
                              </div>
                              <div className="form-group">
                                 <label>Nội dung:</label>
                                 <textarea className="form-control" rows={4}></textarea>
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