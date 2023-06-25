import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrum title={"Cart"} />
      <div className="cart-wraper py-5 home-wraper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex align-items-center justify-content-between">
                <div className="cart-col-1">
                  <h4>Product</h4>
                </div>
                <div className="cart-col-2">
                  <h4>Price</h4>
                </div>
                <div className="cart-col-3">
                  <h4>Quantity</h4>
                </div>
                <div className="cart-col-4">
                  <h4>Total</h4>
                </div>
              </div>
              <div className="cart-data d-flex align-items-center justify-content-between py-4">
                <div className="cart-col-1 d-flex align-items-center gap-15">
                  <div className="w-25">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-75">
                    <h6>
                      Noise ColorFit Pulse Grand Smart Watch with 1.69"(4.2cm)
                      HD Display
                    </h6>
                    <p>Model Name : ColorFit Grand</p>
                    <p> Color: lime Green</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price"> ₹ 2540</h5>
                </div>
                <div className="cart-col-3">
                  <input type="number" min={1} max={10} />
                  <AiTwotoneDelete className="ms-2 fs-3" />
                </div>
                <div className="cart-col-4">
                  <h5 className="price">₹ 2540</h5>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-baseline justify-content-between py-3">
                <Link className="button">Continue to Shoping</Link>
                <div className="d-flex flex-column align-items-end">
                  <h5>SubTotal: ₹2540</h5>
                  <p>Taxes and shiping calculated at Checkout</p>
                  <Link to="/checkout" className="button w-45">
                    CheckOut
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
