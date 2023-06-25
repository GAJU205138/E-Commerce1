import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { MdCall, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <Meta title="Contact" />
      <BreadCrum title={"Contact"} />
      <div className="contact-wraper home-wraper-2 py-">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="Contact-us"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242123.99562960534!2d73.8567437!3d18.520430300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678018590684!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                className="border-0 w-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wraper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      className="w-100 form-control"
                      placeholder="Content"
                    ></textarea>
                  </form>
                  <div className="pt-3">
                    <button className="button border-0">Submit</button>
                  </div>
                </div>
                <div>
                  <h3 className="contact-title">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiFillHome className="fs-4" />
                        <address className="mb-0">
                          Hno:380 Hatialur tal Hukkeri Opposite to busStand
                        </address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <MdCall className="fs-4" />
                        <a href="tel:+918095513084">+91 8095513084</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <MdEmail className="fs-4" />
                        <a href="emailto:Hireghuligaju@gmail.com">
                          Hireghuligaju@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiFillInfoCircle className="fs-4" />
                        <p className="mb-0">Monday-Friday 10AM-6PM</p>
                      </li>
                    </ul>
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

export default Contact;
