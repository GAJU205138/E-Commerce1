import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  const location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product" className="product-card position-relative">
          <div className="wishlist">
            <img src="images/wish.svg" alt="wish" />
          </div>
          <div className="product-img">
            <img src="images/watch.jpg" className="img-fluid " alt="product" />
            <img
              src="images/watch-1.avif"
              className="img-fluid"
              alt="product"
            />
          </div>
          <div className="product-details">
            <h6 className="brand"> Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colour for student
            </h5>
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={3}
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <p className="price"> $100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist">
            <img src="images/wish.svg" alt="wish" />
          </div>
          <div className="product-img">
            <img src="images/watch.jpg" className="img-fluid " alt="product" />
            <img
              src="images/watch-1.avif"
              className="img-fluid"
              alt="product"
            />
          </div>
          <div className="product-details">
            <h6 className="brand"> Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colour for student
            </h5>
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={3}
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <p className="price"> $100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
