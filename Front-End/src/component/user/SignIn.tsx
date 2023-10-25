import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/user";
import { message } from "antd";
import { useForm } from "react-hook-form";

type Props = {};

const SignIn = (props: Props) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (values: any) => {
    try {
      const { data: user } = await login(values);
      localStorage.setItem("token", JSON.stringify(user.accessToken));
      localStorage.setItem("user", JSON.stringify(user));
      const accessToken = localStorage.getItem('user');
	    const role = accessToken ? JSON.parse(accessToken).user.role : null;
      message.success("Đăng nhập thành công!", 2);
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      message.error("Email hoặc mật khẩu không chính xác");
    }
  };
  return (
    <div>
      <section
        className="vh-100"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        {...register("email")}
                      />
                      <label
                        className="form-label"
                        htmlFor="typeEmailX-2"
                      ></label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        {...register("password")}
                      />
                      <label
                        className="form-label"
                        htmlFor="typePasswordX-2"
                      ></label>
                    </div>

                    {/* <!-- Checkbox --> */}
                    <div className="form-check d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="form1Example3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form1Example3"
                        >
                          {" "}
                          Remember password{" "}
                        </label>
                      </div>
                      <p className="mt-0">
                        <a href="forgotPassword">Forgot password</a>
                      </p>
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>

                  <hr className="my-4" />

                  <button
                    className="btn btn-lg btn-block btn-primary"
                    style={{ backgroundColor: "#dd4b39" }}
                    type="submit"
                  >
                    <i className="fab fa-google me-2"></i> Sign in with google
                  </button>
                  <button
                    className="btn btn-lg btn-block btn-primary mb-2"
                    style={{ backgroundColor: "#3b5998" }}
                    type="submit"
                  >
                    <i className="fab fa-facebook-f me-2"></i>Sign in with
                    facebook
                  </button>
                  <p className="mt-3">
                    Bạn chưa có tài khoản? <a href="signup">Đăng ký</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SignIn;
