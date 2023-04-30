import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState();


  const navigate = useNavigate();
  const location = useLocation()
  console.log('Login Location', location)
  const from = location.state?.from?.pathname || '/';
  console.log(from)


  const onSubmit = (data) => {
    const {email, password} = data;

    signIn(email, password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser)
      navigate(from, { replace: true });
      Swal.fire("Success!", "Successfully Login to account!", "success");
    })
    .catch((error) =>{
      console.log(error)
      Swal.fire("Oops...!", `${error.message}`, "error");
    })
  };



  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-6 p-5 my-5 mx-auto login rounded">
          <h2 className="text-center mb-2 fw-semibold opacity-75">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <p role="alert" className="text-danger my-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  aria-label="Text input with checkbox"
                  {...register("password", {
                    required: "required",
                  })}
                />
                <div className="input-group-text">
                  <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    value="password"
                    aria-label="Checkbox for following text input"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
              </div>
              {errors.password && (
                <p role="alert" className="alert alert-danger my-2 p-2">
                  {errors.password.message}
                </p>
              )}
            <div className="">
              <p className="">
                New to this website?{" "}
                <Link to="/register" className="link-opacity-75-hover">
                  Register
                </Link>
              </p>
            </div>
            <div className="text-center">
              <button type="submit" className="login-btn w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
