import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Meta title="Login" />
      <BreadCrum title={"Login"} />
      <div className="login-wraper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">LogIn</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                </form>
                <div className="mt-3">
                  <Link to="/forgot-password">Forgot Your Password ?</Link>
                  <div className="d-flex justify-content-center gap-15 mt-2">
                    <button className="button border-0">Log In</button>
                    <Link className="button sign-up" to="/sign-up">
                      Sign Up
                    </Link>
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

export default Login;
