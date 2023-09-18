import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div id="content-page" className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle iq-card-icon bg-primary">
                      <i className="ri-user-line"></i>
                    </div>
                    <div className="text-left ml-3">
                      <h2 className="mb-0">
                        <span className="counter">7900</span>
                      </h2>
                      <h5 className="">Người dùng</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle iq-card-icon bg-danger">
                      <i className="ri-book-line"></i>
                    </div>
                    <div className="text-left ml-3">
                      <h2 className="mb-0">
                        <span className="counter">4.8</span>K
                      </h2>
                      <h5 className="">Sách</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle iq-card-icon bg-warning">
                      <i className="ri-shopping-cart-2-line"></i>
                    </div>
                    <div className="text-left ml-3">
                      <h2 className="mb-0">
                        <span className="counter">1.2</span>K
                      </h2>
                      <h5 className="">Đơn Hàng</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle iq-card-icon bg-info">
                      <i className="ri-radar-line"></i>
                    </div>
                    <div className="text-left ml-3">
                      <h2 className="mb-0">
                        <span className="counter">690</span>
                      </h2>
                      <h5 className="">Chờ Duyệt</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex justify-content-between align-items-center">
                  <div className="iq-header-title">
                    <h4 className="card-title mb-0">Doanh số hàng ngày</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div id="iq-sale-chart"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex justify-content-between align-items-center">
                  <div className="iq-header-title">
                    <h4 className="card-title mb-0">Tóm lược</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <ul className="list-inline p-0 mb-0">
                    <li>
                      <div className="iq-details mb-2">
                        <span className="title">Thu nhập</span>
                        <div className="percentage float-right text-primary">
                          95 <span>%</span>
                        </div>
                        <div className="iq-progress-bar-linear d-inline-block w-100">
                          <div className="iq-progress-bar iq-bg-primary">
                            <span
                              className="bg-primary"
                              data-percent="90"
                            ></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="iq-details mb-2">
                        <span className="title">Lợi nhuận</span>
                        <div className="percentage float-right text-warning">
                          72 <span>%</span>
                        </div>
                        <div className="iq-progress-bar-linear d-inline-block w-100">
                          <div className="iq-progress-bar iq-bg-warning">
                            <span
                              className="bg-warning"
                              data-percent="75"
                            ></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="iq-details mb-2">
                        <span className="title">Chi phí</span>
                        <div className="percentage float-right text-info">
                          75 <span>%</span>
                        </div>
                        <div className="iq-progress-bar-linear d-inline-block w-100">
                          <div className="iq-progress-bar iq-bg-info">
                            <span className="bg-info" data-percent="65"></span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <h4 className="text-uppercase text-black mb-0">
                    Phiên (Bây giờ)
                  </h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="font-size-80 text-black">12</div>
                    <div className="text-left">
                      <p className="m-0 text-uppercase font-size-12">1 giờ</p>
                      <div className="mb-1 text-black">
                        1500
                        <span className="text-danger">
                          <i className="ri-arrow-down-s-fill"></i>3.25%
                        </span>
                      </div>
                      <p className="m-0 text-uppercase font-size-12">1 ngày</p>
                      <div className="mb-1 text-black">
                        1890
                        <span className="text-success">
                          <i className="ri-arrow-down-s-fill"></i>1.00%
                        </span>
                      </div>
                      <p className="m-0 text-uppercase font-size-12">1 tuần</p>
                      <div className="text-black">
                        1260
                        <span className="text-danger">
                          <i className="ri-arrow-down-s-fill"></i>9.87%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id="wave-chart-7"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Mở hóa đơn</h4>
                  </div>
                  <div className="iq-card-header-toolbar d-flex align-items-center">
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle text-primary"
                        id="dropdownMenuButton5"
                        data-toggle="dropdown"
                      >
                        <i className="ri-more-fill"></i>
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton5"
                      >
                        <a className="dropdown-item" href="#">
                          <i className="ri-eye-fill mr-2"></i>Xem
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-delete-bin-6-fill mr-2"></i>Xoá
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-pencil-fill mr-2"></i>Sửa
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-printer-fill mr-2"></i>In
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-file-download-fill mr-2"></i>Tải
                          xuống
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div className="table-responsive">
                    <table className="table mb-0 table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Khách hàng</th>
                          <th scope="col">Ngày</th>
                          <th scope="col">Hóa đơn</th>
                          <th scope="col">Số tiền</th>
                          <th scope="col">Tình trạng</th>
                          <th scope="col">Hoạt động</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ông Trần Thuận</td>
                          <td>18/10/2019</td>
                          <td>20156</td>
                          <td>150.000đ</td>
                          <td>
                            <div className="badge badge-pill badge-success">
                              Đã thanh toán
                            </div>
                          </td>
                          <td>Sao chép</td>
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
  );
};

export default Dashboard;
