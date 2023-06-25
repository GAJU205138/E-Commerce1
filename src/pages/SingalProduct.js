import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import StarRatingComponent from "react-star-rating-component";
import ReactImageMagnify from "react-image-magnify";
import Color from "../components/Color";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
// import ReactImageZoom from "react-image-zoom";
// import Zoom from "react-img-zoom";
// import watchImg1200 from "../../public/images/watch-3.jpg";
// import watchImg300 from "../../public/images/watch-4.jpg";

const SingalProduct = () => {
  const props = {
    enlargedImagePosition: "over",
  };
  return (
    <>
      <Meta title="Product-Name" />
      <BreadCrum title={"Product-Name"} />
      <div className="main-product-wraper py-5 home-wraper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  {/* <ReactImageZoom {...props} /> */}
                  <ReactImageMagnify
                    {...props}
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "images/watch-4.jpg",
                      },
                      largeImage: {
                        src: "images/watch-3.jpg",
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
              </div>
              <div className="other-product-image d-flex flex-wrap gap-15">
                <div>
                  <ReactImageMagnify
                    {...props}
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "images/watch-5-1.jpg",
                      },
                      largeImage: {
                        src: "images/watch-5.jpg",
                        width: 1200,
                        height: 1800,
                        enlargedImagePosition: "over",
                      },
                    }}
                  />
                </div>
                <div>
                  <ReactImageMagnify
                    {...props}
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "images/watch-6-1.jpg",
                      },
                      largeImage: {
                        src: "images/watch-6.jpg",
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
                <div>
                  <ReactImageMagnify
                    {...props}
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "images/watch-7-1.jpg",
                      },
                      largeImage: {
                        src: "images/watch-7.jpg",
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
                <div>
                  <ReactImageMagnify
                    {...props}
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "images/watch-8-1.jpg",
                      },
                      largeImage: {
                        src: "images/watch-8.jpg",
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="singal-product-details home-warper py-5">
                <div className="title">
                  <h3>
                    Noise ColorFit Pulse Grand Smart Watch with 1.69"(4.2cm) HD
                    Display, 60 Sports Modes
                  </h3>
                </div>
                <p className="price-singal-product mt-3">₹ 2500</p>
                <div className="singal-product-ratings">
                  <div className="d-flex align-items-center gap-15 mb-2">
                    <StarRatingComponent
                      name="rate2"
                      editing={false}
                      starCount={5}
                      value={3}
                      className="fs-5"
                    />
                    <p className="mb-0">{"{2 Review}"}</p>
                  </div>
                  <a className="mb-3" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="bottom-details py-3">
                  <div className="d-flex my-2 gap-15">
                    <h5 className="brand-title">Brand:</h5>
                    <p className="brand-details">Noise</p>
                  </div>
                  <div className="d-flex my-2 gap-15">
                    <h5 className="brand-title">Model Name:</h5>
                    <p className="brand-details">ColorFit Grand</p>
                  </div>
                  <div className="d-flex my-2 gap-15">
                    <h5 className="brand-title">Style:</h5>
                    <p className="brand-details">ColorFit Pulse Grand</p>
                  </div>
                  <div className="d-flex my-2 gap-15">
                    <h5 className="brand-title">Screen Size:</h5>
                    <p className="brand-details">1.69 Inches</p>
                  </div>
                  <div className="d-flex my-2 ">
                    <h5 className="brand-title">Color:</h5>
                    <Color />
                  </div>
                  <div className="d-flex my-2 gap-15">
                    <h5 className="brand-title">Avalablity:</h5>
                    <p className="brand-details">Instock</p>
                  </div>
                  <div className="d-flex align-items-center flex-row my-2 gap-15">
                    <h5 className="brand-title">Quantity:</h5>
                    <input min={1} max={50} type="Number" />
                    <div className="d-flex aling-items-center gap-15">
                      <button className="buy-button button border-0">
                        Buy It Now
                      </button>
                      <button className="add-cart button border-0">
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="cart-item d-flex align-items-center my-3 gap-15">
                    <div className="my-2">
                      <a href="/" className="fs-6 ">
                        <AiFillHeart className="me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                    <div className="my-2">
                      <a href="/" className="fs-6">
                        <BsCartPlusFill className="me-2" />
                        Add to Compare
                      </a>
                    </div>
                  </div>
                  <div className="about-item">
                    <h5>About this item</h5>
                    <ul>
                      <li>
                        1.69" grand display: Get the rich immersive viewing
                        experience on the 1.69" LCD display.;60 sports modes:
                        Take your pick from a wide range of 60 sports modes.
                        Charging Time 2.5 hours
                      </li>
                      <li>
                        Instant charge: Now enjoy more than a day’s worth/25
                        hours of battery in just 15 minutes of charge. Battery
                        Capacity: 260 mAh;150+ cloud-based & customisable watch
                        faces: Choose from 150+ cloud-based and customisable
                        watch faces and change your look to suit your outfit.
                      </li>
                      <li>
                        Noise Health suite: Get valuable insights about your
                        health from Noise Health Suite featuring 24*7 heart
                        rate, stress, blood oxygen, sleep monitor and menstrual
                        cycle tracking.;Quick-replies to texts and calls: Stay
                        in touch with the world with quick replies available for
                        Android
                      </li>
                      <li>
                        IP68 waterproof: Live your life the way you want to,
                        thanks to the IP68 waterproof rating.; 7-day battery:
                        Charge your watch once and go about your week without a
                        hitch.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="description-wraper py-5 home-wraper-2 px-3">
        <div className="container-xxl"></div>
        <div className="row">
          <h3 className=" mb-3">Description</h3>
          <div className="col-12 description-inner">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              veniam, corporis ut sapiente temporibus excepturi consectetur
              quibusdam blanditiis animi est, dolore necessitatibus vitae
              perferendis tempore, reprehenderit deserunt alias enim! Itaque.
            </p>
          </div>
        </div>
      </section>
      <section className="review-wraper py-5 px-3 home-wraper-2">
        <div className="container-xxl"></div>
        <div className="row"></div>
        <div className="col-12">
          <h3 id="review">Reviews</h3>
          <div className="review-inner-wraper">
            <div className="d-flex review-head justify-content-between align-items-end">
              <div>
                <h3 className="mb-2">Customer Reviews</h3>
                <div className="d-flex gap-15">
                  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    starCount={5}
                    value={3}
                  />
                  <p>Based on 2 Reviews</p>
                </div>
              </div>
              <div className="review">
                <a href="/" className="text-dark text-decoration-underline">
                  Write a Review
                </a>
              </div>
            </div>
            <div className="review-form py-3">
              <h4>Write a Review</h4>
              <StarRatingComponent
                name="rate2"
                editing={true}
                starCount={5}
                value={4}
              />
              <form action="" className="d-flex flex-column gap-15">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  className="w-100 form-control"
                  placeholder="Comments"
                ></textarea>
              </form>
              <div className="pt-3 d-flex justify-content-end">
                <button className="button border-0">Submit Review</button>
              </div>
            </div>
            <div className="reviews py-3">
              <p className="mb-0">Gajanand Hireghuli</p>
              <div className="review">
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  starCount={5}
                  value={4}
                />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis perspiciatis iure tempora provident quod quam
                  dolore natus fugit eos nulla officia aut minima blanditiis,
                  minus alias amet optio animi adipisci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wraper py-5 px-3 home-wraper-2">
        <div className="container-xxl">
          <div className="featured-card">
            <h2 className="mb-3">Popular-Products</h2>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingalProduct;
