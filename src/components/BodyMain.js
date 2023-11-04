import React from "react";
import Image from "next/image";
import mainBanner from "../../public/image1.png"
import Link from 'next/link'


function BodyMain() {
  return (
    <>
      <div className="container mx-auto row">
        <div className="container col-md-8 col-lg-8">
          <div className="row txt-1 megaRes">
            Automated
          </div>

          <h1 className="row txt-2">
            Influencer Marketing
            <br />
            Platform.
          </h1>

          <h2 className="row txt-4">
            Maximize your brand reach with micro-influencers across 15+
            categories.
          </h2>
        </div>
        <div className="col-md-4 col-lg-4 img-1">
          <Image
            className="img-fluid rounded"
            src={mainBanner}
            priority={true}
            alt="Passion into Profession"
          />
        </div>

      <div className="col-md-4 col-12 get-started-button-credit-card">
          <Link href="/pricing">
            <button className="btn signup-btn-grad btn-g-fonts">
              Get Started
            </button>
          </Link>
          <p className="subtext">No credit card required.</p>
      </div>

      </div>





      <div className="container row justify-content-center mt-1 mb-5 pt-4 pb-4 mx-auto">
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          15k+ <br />{" "}
          <span className="body-bottom-tag-styles">Influencers</span>
        </div>
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          {">5.6%"} <br />{" "}
          <span className="body-bottom-tag-styles">Engagement.R</span>
        </div>
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          1.2 M <br />{" "}
          <span className="body-bottom-tag-styles">Avg. Reach</span>
        </div>
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          70 k+ <br />{" "}
          <span className="body-bottom-tag-styles">Avg. Likes</span>
        </div>
      </div>
    </>
  );
}

export default BodyMain;
