import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <div className="col-lg-3 col-md-3">
        <div className=" ctn_seller">
          <div className="box_seller">
            <div className="title_seller">
              <h3>Sách nổi bật</h3>
            </div>
            <div className="body_seller">
              <div className="item-seller">
                <p className="image">
                  <a href="">
                    <img
                      src="/src/assets/client-images/anh-1.png"
                      alt="Anh phải sống (In theo bản của NXB Đời Nay , năm 1937)"
                    />
                  </a>
                </p>
                <p className="name">
                  <a href="">
                    Anh phải sống (In theo bản của NXB Đời Nay , năm 1937)
                  </a>
                </p>
                <p className="author">Khái Hưng - Nhất Linh</p>
                <p className="saleoff">
                  <span>20 %</span>
                </p>
                <p className="price">32,000₫</p>
              </div>
            </div>
            <div className="body_seller">
              <div className="item-seller">
                <p className="image">
                  <a href="">
                    <img
                      src="/src/assets/client-images/anh-2.png"
                      alt="Tiêu sơn tráng sĩ (In theo bản của NXB Đời Nay, 1940)"
                    />
                  </a>
                </p>
                <p className="name">
                  <a href="">
                    Tiêu sơn tráng sĩ (In theo bản của NXB Đời Nay, 1940)
                  </a>
                </p>
                <p className="author">Khái Hưng</p>
                <p className="saleoff">
                  <span>25 %</span>
                </p>
                <p className="price">101,250₫</p>
              </div>
            </div>
            <p className="see-all">
              <a href="">
                Xem tất cả
              </a>
            </p>
          </div>
          <div className="box_seller">
            <div className="title_seller">
              <h3>Sách mới phát hành</h3>
            </div>
            <div className="body_seller">
              <div className="item-seller">
                <p className="image">
                  <a href="">
                    <img
                      src="/src/assets/client-images/anh-3.png"
                      alt="Danh tác văn học việt nam - Truyện ngắn Nhất Linh (bìa mềm)"
                    />
                  </a>
                </p>
                <p className="name">
                  <a href="">
                    Danh tác văn học việt nam - Truyện ngắn Nhất Linh (bìa mềm)
                  </a>
                </p>
                <p className="author">Nhất Linh</p>
                <p className="saleoff">
                  <span>25 %</span>
                </p>
                <p className="price">71,250₫</p>
              </div>
            </div>
            <div className="body_seller">
              <div className="item-seller">
                <p className="image">
                  <a href="">
                    <img
                      src="/src/assets/client-images/anh-4.png"
                      alt="Danh tác văn học Việt Nam - Hồn bướm mơ tiên (bìa mềm)"
                    />
                  </a>
                </p>
                <p className="name">
                  <a href="">
                    Danh tác văn học Việt Nam - Hồn bướm mơ tiên (bìa mềm)
                  </a>
                </p>
                <p className="author">Khái Hưng</p>
                <p className="saleoff">
                  <span>20 %</span>
                </p>
                <p className="price">32,000₫</p>
              </div>
            </div>
            <div className="body_seller">
              <div className="item-seller">
                <p className="image">
                  <a href="">
                    <img
                      src="/src/assets/client-images/anh-5.png"
                      alt="Lạnh lùng (In theo bản NXB Đời Nay, Hà Nội, 1940)"
                    />
                  </a>
                </p>
                <p className="name">
                  <a href="">
                    Lạnh lùng (In theo bản NXB Đời Nay, Hà Nội, 1940)
                  </a>
                </p>
                <p className="author">Nhất Linh</p>
                <p className="saleoff">
                  <span>25 %</span>
                </p>
                <p className="price">51,000₫</p>
              </div>
            </div>
            <p className="see-all">
              <a href="">
                Xem tất cả
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
