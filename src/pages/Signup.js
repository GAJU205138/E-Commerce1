import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <div>
      <Meta title="Sign-up" />
      <BreadCrum title={"Sign-up"} />
      <div className="login-wraper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">SignUp</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
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
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="Mobile number"
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
                  <div className="d-flex justify-content-center gap-15 mt-2">
                    <button className="button border-0">Sign Up</button>
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

export default Signup;
