import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title="Privacy-Policy" />
      <BreadCrum title={"Privacy-Policy"} />
      <section className="policy-wraper py-5 home-wraper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
