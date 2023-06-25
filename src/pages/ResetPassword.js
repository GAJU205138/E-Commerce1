import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <div>
      <Meta title="Reset-password" />
      <BreadCrum title={"Reset-password"} />
      <div className="login-wraper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Reset Your Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      name="password"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                      name="confpassword"
                    />
                  </div>
                </form>
                <div className="mt-3">
                  <div className="d-flex flex-column gap-15 mt-2 align-items-center justify-content-center">
                    <button type="submit" className="button border-0">
                      Ok
                    </button>
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

export default ResetPassword;
