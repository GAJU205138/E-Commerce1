import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title"> Samsung Galaxy Note10+ mobile:sim...</h6>
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={3}
            />
            <p className="price">
              <span className="red-p">$100</span> &nbsp;
              <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0 ">
                <b>5</b> Days
              </p>
              <div className="d-flex align-items-center gap-10">
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>
              </div>
            </div>
            <div className="product-cout my-3">
              <p>Products: 5</p>
              <div class="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
