import React from "react";
import Image from "next/image";
import banner from "../../public/mainBanner.jpg";

function BodyMain() {
  return (
    <>
      <div className="container mx-auto row">
        <div className="container col-md-8 col-lg-8">
          <div className="row txt-1">
            <p>
              Micro Influencers bring <span id="megaRes">Mega Results</span>
            </p>
          </div>
          <div className="row txt-2">The Affordable</div>
          <div className="row txt-3">
            <p>
              Way to Amplify your Brand. <br /> Boost
              <span className="gradient-text"> Sales</span>; Not
              <span id="budRes"> Budget</span>
            </p>
          </div>
          <div className="row txt-4">
            <p>
              Intraxn is a{" "}
              <span className="span-underline">micro-influencer platform</span>,
              where Brands meet influencers in making ever most affordable
              collaborations.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 img-1">
        <Image className="img-fluid rounded" src={banner} priority={true} alt="Passion into Profession" />
        

          {/* <Image className="img-fluid rounded"
            src={"https://intraxn-app.s3.ap-south-1.amazonaws.com/mainBanner.webp"}
            priority={true}
            width={576}
            height={700}
            alt="passion into profession"
          /> */}
        </div>
      </div>

      <div className="container row btn-container mx-auto">
        <div className="col-md-3 col-6">
          <div className="col-md-12 col-12 btn signup-btn-grad">
            I`m a Brand
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="col-md-12 col-12 btn login-btn-grad">
            I `m a Creator
          </div>
        </div>
      </div>

      <div className="container row justify-content-center mt-5 mb-5 pt-4 pb-4 mx-auto">
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          15k+ <br /> <span className="body-bottom-tag-styles">Creators</span>
        </div>
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          80+ <br /> <span className="body-bottom-tag-styles">Brands</span>
        </div>
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          5000+ <br /> <span className="body-bottom-tag-styles">Campaigns</span>
        </div>
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          500k+ <br /> <span className="body-bottom-tag-styles">Revenue</span>
        </div>
      </div>
    </>
  );
}

export default BodyMain;
