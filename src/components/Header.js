import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 pb-0">
              <p
                className="text-white"
                style={{ fontSize: "15px", lineHeight: "1" }}
              >
                Free shoping over₹ 500 & free return
              </p>
            </div>
            <div className="col-6 pb-0">
              <p className="text-end text-white" style={{ fontSize: "15px" }}>
                Tollfree:
                <Link className="text-white" href="el:+91 8095513084">
                  +91 809513084
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2 px-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <Link>
                <h2 className="text-white">E COMMERCE</h2>
              </Link>
            </div>
            <div className="col-5 ">
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search product..."
                  aria-label="Search product..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper d-flex align-items-center justify-content-between px-2">
                <div>
                  <Link
                    to="Compare-Products"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/compare.svg" alt="compare" />
                    <p>
                      Campare <b /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="wish-list"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p>
                      Favourite <b /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="Login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/user.svg" alt="user" />
                    <p>
                      Login <b /> My account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src="/images/cart.svg"
                      alt="cart"
                      className="img-fluid"
                    />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="menu-links py-2">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our store</NavLink>
                    <NavLink to="/Blogs">Blogs</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
