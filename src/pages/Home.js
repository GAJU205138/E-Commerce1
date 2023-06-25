import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";

const Home = () => {
  return (
    <>
      <Meta title="Home" />
      <section className="home-wraper-1 py-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-6 ">
              <div className="main-banner p-3 position-relative">
                <img
                  className="img-fluid rounded-3 "
                  src="images/main-banner-1.jpg"
                  alt="mainbanner"
                />

                <div className="main-banner-content position-absolute text-white">
                  <h4>SUPERCHARGED FOR PRO5</h4>
                  <h5>iPad 513+ Pro.</h5>
                  <p>from $999.00 or $41.62/mo</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-item-center ">
                <div className="small-banner p-3 position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-01.jpg"
                    alt="mainbanner"
                  />

                  <div className="small-banner-content position-absolute text-white">
                    <h4>BEST SALE.</h4>
                    <h5>laptops Max.</h5>
                    <p>
                      From $1699.00 or <br />
                      $66.62/mo
                    </p>
                  </div>
                </div>

                <div className="small-banner p-3 position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-02.jpg"
                    alt="mainbanner"
                  />

                  <div className="small-banner-content position-absolute text-white">
                    <h4>NEW ARRIVAL.</h4>
                    <h5>Buy IPad Air</h5>
                    <p>
                      From $599.00 or <br />
                      $49.91/mo for 12mo
                    </p>
                  </div>
                </div>

                <div className="small-banner p-3 position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-03.jpg"
                    alt="mainbanner"
                  />

                  <div className="small-banner-content position-absolute text-white">
                    <h4> %15 OFF.</h4>
                    <h5>Smartwatch 7.</h5>
                    <p>
                      Shop the latest band <br />
                      styles and colors
                    </p>
                  </div>
                </div>

                <div className="small-banner p-3 position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-04.jpg"
                    alt="mainbanner"
                  />
                  <div className="small-banner-content position-absolute text-white">
                    <h4>FREE ENGRAVING.</h4>
                    <h5>AirPros Max</h5>
                    <p>
                      High-fidelity playback & <br />
                      ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h4>Free shiping</h4>
                    <p className="mb-0">From all orders over $500</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h4>Daily surprise offers</h4>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h4>Support 24X7</h4>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h4>Affordable Price</h4>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h4>Secure Payment</h4>
                    <p className="mb-0">100% Protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categaries d-flex align-items-center flex-wrap justify-content-between">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/watch.jpg" alt="watch" height={"110px"} />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Headphone" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/watch.jpg" alt="watch" height={"110px"} />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Headphone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wraper py-5 home-wraper-2">
        <div className="container-xxl">
          <div className="featured-card">
            <h2>Featured colletion</h2>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wraper py-5 home-wraper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-1.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart watch Series-7</h6>
                  <p>From $599-499</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-2.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Laptops </h5>
                  <h6 className="text-dark">Well adavance series</h6>
                  <p className="text-dark">From $1599-1499</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-3.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smart phones</h5>
                  <h6 className="text-dark">5G Smart-Phones</h6>
                  <p className="text-dark">From $699-599</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-4.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Speakers</h5>
                  <h6 className="text-dark">Noise pollution free</h6>
                  <p className="text-dark">From $399-199</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wraper py-5 home-wraper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h2>Special-product</h2>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wraper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inside-wraper card-wraper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wraper py-5 home-wraper-2">
        <div className="container-xxl">
          <h2>Our New blogs</h2>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
