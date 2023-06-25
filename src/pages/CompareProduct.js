import React from "react";
import BreadCrum from "../components/BreadCrum";
import Color from "../components/Color";
import Meta from "../components/Meta";

const CompareProduct = () => {
  return (
    <div>
      <Meta title="Compare Products" />
      <BreadCrum title={"Compare Products"} />
      <div className="product-compare-wraper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 d-flex gap-30">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Havels Wave Lite Smartwatch with 1.69" HD Display, Sleek
                    Metal Body
                  </h5>
                  <h6 className="price"> $100</h6>
                </div>
                <div className="product-details">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-details">
                  <h5>Type:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-details">
                  <h5>Availablity:</h5>
                  <p>In-stock</p>
                </div>
                <div className="product-details">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-details">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Havels Wave Lite Smartwatch with 1.69" HD Display, Sleek
                    Metal Body
                  </h5>
                  <h6 className="price"> $100</h6>
                </div>
                <div className="product-details">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-details">
                  <h5>Type:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-details">
                  <h5>Availablity:</h5>
                  <p>In-stock</p>
                </div>
                <div className="product-details">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-details">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
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

export default CompareProduct;
