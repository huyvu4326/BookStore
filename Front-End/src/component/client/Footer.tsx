import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <section className="section-footer container" style={{display: 'flex'}}>
      <footer className="grid items-center gap-8 pb-8 pt-6 md:py-8">
          <div className="logo-footer">
            <a href="/">
              <img src="/src/assets/client-images/logo1.png" alt="Địa chỉ cuối trang" />
            </a>
          </div>
          <div className="footer-1">
            <div className="space-y-3">
              <h4 className="text-base font-medium">Credits</h4>
              <ul className="space-y-3">
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-medium">Credits</h4>
              <ul className="space-y-3">
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-medium">Credits</h4>
              <ul className="space-y-3">
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-medium">Credits</h4>
              <ul className="space-y-3">
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
                <li>
                  <a className="a-footer-all">OneStopShop</a>
                </li>
              </ul>
            </div>

            <div className="footer-2 space-y-3">
              <h4 className="text-base font-medium">
                Subscribe to our newsletter
              </h4>
              <form action="">
                <div className="form-box-all">
                  <input type="text" placeholder="Email" />
                  <button className="button-email-footer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="category-hot-footer">
            <h3>Danh mục và sách được yêu thích</h3>
            <ul>
              <li>
                <a href="6000-tu-vung-tieng-anh-thong-dung-mem">
                  6000 từ vựng tiếng anh thông dụng (mềm)
                </a>
              </li>
              <li>
                <a href="danh-tac-van-hoc-viet-nam-truyen-ngan-khai-hung-bia-mem">
                  Danh tác văn học việt nam - Truyện ngắn Khái Hưng (bìa mềm)
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-copyright">
            <div className="flex">
              <div className="w-7/12 copy-right-footer">
                <p>
                  © 2015 - Bản quyền của nhà sách Minh Thắng -
                  nhasachminhthang.vn
                  <br />
                  Cơ sở 1: 808 Đường Láng, Phường Láng Thượng, Quận Đống Đa, Hà
                  Nội
                  <br />
                  Số giấy chứng nhận đăng ký kinh doanh của thương nhân:
                  0101883129
                  <br />
                  Website đã đăng ký với Bộ Công Thương. Ngày cấp: 11 năm 2014
                  <br />
                  Nơi cấp: Sở Kế Hoạch Và Đầu Tư Hà Nội
                </p>
              </div>
              <div className="w-5/12">
                <div className="right-ct-footer">
                  <a className="certification-footer" href="">
                    <span>Được chứng nhận </span>
                    <img
                      className="img-responsive"
                      src="./src/assets/client-images/chungnhan.png"
                      alt="Được chứng nhận"
                    />
                  </a>
                  <a className="method-footer" href="#">
                    <span>Cách thức thanh toán</span>
                    <img className="img-responsive" src="./src/assets/client-images/safe.jpg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
        
    </div>
  );
};

export default Footer;
