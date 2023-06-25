import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <div>
      <Meta title="Wishlist" />
      <BreadCrum title={"Wishlist"} />
      <div className="wishlist-wraper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative ">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="wishlist-details py-3">
                  <h5 className="title">
                    Havels Wave Lite Smartwatch with 1.69" HD Display, Sleek
                    Metal Body
                  </h5>
                  <h6 className="price"> $100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative ">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="wishlist-details py-3">
                  <h5 className="title">
                    Havels Wave Lite Smartwatch with 1.69" HD Display, Sleek
                    Metal Body
                  </h5>
                  <h6 className="price"> $100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
