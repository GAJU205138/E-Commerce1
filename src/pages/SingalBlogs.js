import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const SingalBlogs = () => {
  return (
    <div>
      <Meta title="Dynamicaly Update" />
      <BreadCrum title={"Dynamicaly Update"} />
      <div className="blog-wraper home-wraper-2 py-5 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="singal-blog-card d-flex flex-column justify-content-center">
                <h3 className="title text-center">A wonderfull morning</h3>
                <img
                  src="/images/blog-1.jpg"
                  className="img-fluid w-75 singal-blog-img"
                  alt="singal"
                />
                <p>
                  You’re only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury –
                  it’s not something people need, but it’s what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan nisl ante vestibulum.
                </p>
                <Link to="/blogs" className="backarrow d-flex gap-15">
                  <HiArrowNarrowLeft className="fs-4" />
                  Go Back Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingalBlogs;
