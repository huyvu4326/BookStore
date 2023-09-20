import React from 'react'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <div>
         <div id="loginModal" className="modal">
                <div className="form-resgiter">
                    {/* <span className="close-modal">&times;</span> */}
                    <div className="user-form-card">
                        <div className="btn-close-modal">
                            <i className="fas fa-times-circle" aria-hidden="true"></i>
                        </div>
                        <div className="user-form-title">
                            <h2>Đăng nhập</h2>
                        </div>
                        <form action="" data-url="" method="POST" role="form" id="formLogin_header" className="user-form">
                            <div id="loadListErrorLogin_header"></div>
                            <input type="hidden" name="_token" value=""/>
                            <div className="form-group">
                                <input type="text" name="username" value="" className="form-control" placeholder="Tên đăng nhập"/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" value="" className="form-control" placeholder="Mật khẩu"/>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="check"/>
                                <label className="form-check-label" htmlFor="check">Nhớ mật khẩu</label>
                            </div>
                            <div className="form-button">
                                <button type="submit">Đăng nhập</button>
                                <a className="btn btn-link" href="/password/reset" target="blank">
                                    Quên mật khẩu
                                </a>
                            </div>
                        </form>
                        <div className="user-form-remind">
                            <p>Bạn chưa có tài khoản?<a className="btnshownav-dangky-tr">Đăng ký</a></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SignIn