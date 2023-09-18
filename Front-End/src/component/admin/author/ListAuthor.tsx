import React from 'react'

type Props = {}

const ListAuthor = (props: Props) => {
  return (
    <div>
         <div id="content-page" className="content-page">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Danh sách tác giả</h4>
                           </div>
                           <div className="iq-card-header-toolbar d-flex align-items-center">
                              <a href="add-author" className="btn btn-primary">Thêm tác giả</a>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <div className="table-responsive">
                              <table className="data-tables table table-striped table-bordered" style={{width:'100%'}}>
                                 <thead>
                                    <tr>
                                       <th style={{width: '5%'}}>STT</th>
                                       <th style={{width: '5%'}}>Hồ sơ</th>
                                       <th style={{width: '20%'}}>Tên tác giả</th>
                                       <th style={{width: '60%'}}>Mô tả tác giả</th>
                                       <th style={{width: '10%'}}>Hoạt động</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td></td>
                                       <td>
                                          <img src="" className="img-fluid avatar-50 rounded" alt=""/>
                                       </td>
                                       <td></td>
                                       <td>
                                          <p className="mb-0"></p>
                                       </td>
                                       <td>
                                          <div className="flex align-items-center list-user-action">
                                             <a className="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="edit-author"><i className="ri-pencil-line"></i></a>
                                             <a className="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xoá" href="#"><i className="ri-delete-bin-line"></i></a>
                                          </div>
                                       </td>
                                    </tr>
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
  )
}

export default ListAuthor