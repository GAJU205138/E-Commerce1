import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import StarRatingComponent from "react-star-rating-component";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Color from "../components/Color";

const OurStore = () => {
  const [grid, setGrid] = useState(3);
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrum title={"OurStore"} />
      <div className="store-wraper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categaries</h3>
                <ul className="ps-3">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Instock(1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        Outofstock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colour</h5>
                  <Color />
                  <h5 className="sub-title">Size</h5>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size"
                    />
                    <label className="form-check-label" htmlFor="size">
                      S (2)
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size"
                    />
                    <label className="form-check-label" htmlFor="size">
                      L (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div className="d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-2 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-2 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-2 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-2 py-2 px-3">
                    Speakers
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="random"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Watch loves everyone latest series</h5>
                      <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={3}
                      />
                      <p>$200</p>
                    </div>
                  </div>
                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="random"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Watch loves everyone latest series</h5>
                      <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={3}
                      />
                      <p>$200</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-5">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <p className="mb-0" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select
                      name=""
                      defaultValue={"manula"}
                      className="form-control form-select"
                      id=""
                    >
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best selling</option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center gap-10 ">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img
                        onClick={() => setGrid(3)}
                        src="images/gr4.svg"
                        className="img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(4)}
                        src="images/gr3.svg"
                        className="img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(6)}
                        src="images/gr2.svg"
                        className="img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(12)}
                        src="images/gr.svg"
                        className="img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product d-flex flex-wrap gap-10">
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
