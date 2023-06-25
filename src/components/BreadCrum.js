import React from "react";
import { Link } from "react-router-dom";

const BreadCrum = (props) => {
  const { title } = props;
  return (
    <div className="breadcrum py-4 mb-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 text-center mb-0">
            <p className="mb-0">
              <Link className="text-dark">Home</Link> / &nbsp; {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrum;
