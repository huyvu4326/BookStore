import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/user";
import { message } from "antd";

type Props = {};

const SignUp = (props: Props) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (values: any) => {
    try {
      const { data: user } = await signup(values);
      // localStorage.setItem("token", JSON.stringify(user.accessToken));
      navigate("/signin");
      message.success("Đăng ký thành công!", 2);
    } catch (error) {
      if (error.response.data.message === "Email đã tồn tại") {
        message.error("Email đã được sử dụng, vui lòng thử lại!", 2);
      }
      // } else {
      //   message.error("Đăng ký không thành công, vui lòng thử lại!", 2);
      // }
    }
  };
  
  return (
    <div>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Your Name"
                          {...register("name")}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          {...register("email")}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          {...register("password")}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="Repeat your password"
                          {...register("confirmPassword")}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-start align-items-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          <span className="align-middle">
                            I agree all statements in{" "}
                            <a href="#!" className="text-body">
                              <u>Terms of service</u>
                            </a>
                          </span>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="signin" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
