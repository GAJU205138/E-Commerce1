import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wraper py-5 home-wraper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data px-3">
                <h3>E Commerce</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
                <h3>Contact Information</h3>
                <p>Gajanand Hireghuli (Hireghuligaju@gmail.com)</p>
                <h3 className="mt-5">Shipping Address</h3>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between px-2"
                >
                  <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name(Option)"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Appartment"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="ZipCode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-1" />
                        Return to Cart
                      </Link>
                      <Link className="button">Continue to Shipping</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5 px-3">
              <div className="d-flex py-3 border-bottom">
                <div className="d-flex w-75 gap-10">
                  <div className="position-relative">
                    <span
                      style={{ top: "-10px", right: "-10px" }}
                      className="badge bg-secondary ps-1 position-absolute rounded-circle"
                    >
                      1
                    </span>
                    <img src="images/watch.jpg" alt="" className="img-fluid" />
                  </div>
                  <div>
                    <h5>Noise smart watches</h5>
                    <p>
                      1.69"(4.2cm) HD Display, 60 Sports Modes, 150 Watch Faces,
                      Fast Charge, Spo2, Stress, Sleep,
                    </p>
                  </div>
                </div>
                <div>
                  <p>₹ 1500</p>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Shipping</p>
                  <p>₹ 150</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p>SubTotal</p>
                  <p>₹ 1500</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                <p>Total</p>
                <p>₹ 1750</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
