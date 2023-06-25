import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content px-3 py-3">
        <p className="date"> 1 Dec 2022</p>
        <h5 className="title">A beutiful sunday morning</h5>
        <p className="Desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <Link to="/blogs/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
