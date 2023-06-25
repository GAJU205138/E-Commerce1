import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <Meta title="Forgot password" />
      <BreadCrum title={"Forgot password"} />
      <div className="login-wraper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Reset Your Password</h3>
                <p className="text-center my-2">
                  We will you an email to reset password
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                </form>
                <div className="mt-3">
                  <div className="d-flex flex-column gap-15 mt-2 align-items-center justify-content-center">
                    <button type="submit" className="button border-0">
                      Submit
                    </button>
                    <Link className="text-center" to="/Login">
                      Cancel
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

export default ForgotPassword;
