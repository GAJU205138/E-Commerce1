import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h3 className="mb-0 text-white"> Sign in for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email adress..."
                  aria-label="Your Email adress..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <address className="text-white">
                At/P:Hattialur Home No 385 Opposite to bus stand <br />{" "}
                PinCode:591107
              </address>
              <a className="text-white" href="tel:+91 8095513084">
                Tel:+91 8095513084
              </a>
              <br />
              <a className="text-white" href="mailto:Hireghuligaju@gmail.com">
                MailTo:Hireghuligaju@gmail.com
              </a>
              <div className="contact-icons">
                <Link className="text-white p-2">
                  <BsLinkedin className="fs-4" />
                </Link>
                <Link className="text-white p-2">
                  <BsFacebook className="fs-4" />
                </Link>
                <Link className="text-white p-2">
                  <BsInstagram className="fs-4" />
                </Link>
                <Link className="text-white p-2">
                  <BsYoutube className="fs-4" />
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="privacy-policy" className="text-white mb-1">
                  Privacy policy
                </Link>
                <Link to="refund-policy" className="text-white mb-1">
                  Refund policy
                </Link>
                <Link to="shiping-policy" className="text-white mb-1">
                  Shiping policy
                </Link>
                <Link to="terms-conditions" className="text-white mb-1">
                  Terms &Conditions
                </Link>
                <Link className="text-white mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1">About Us</Link>
                <Link className="text-white mb-1">Faq</Link>
                <Link className="text-white mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-2">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1">Laptops</Link>
                <Link className="text-white mb-1">Headphones</Link>
                <Link className="text-white mb-1">Tablets</Link>
                <Link className="text-white mb-1">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}:Powered By E COMMERCE
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
