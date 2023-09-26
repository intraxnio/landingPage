import React from "react";
import Image from "next/image";
import mainBanner from "../../public/mainImg.png"

function BodyMain() {
  return (
    <>
      <div className="container mx-auto row">
        <div className="container col-md-8 col-lg-8">
          <div className="row txt-1 megaRes">
            
              <span className="">Brand Reach</span>
            
          </div>
          <div className="row txt-2"> <p>Collaborations with<br />
              <span className="gradient-text">Influencers</span>
              </p></div>
       
          <div className="row txt-4">
            <p>
              Create
              <span className="creator-underline"> a campaign</span>,
              and start receiving influencer requests. that&apos;s it

            </p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 img-1">
        <Image className="img-fluid rounded" src={mainBanner} priority={true} alt="Passion into Profession" />
{/* <img className="img-fluid rounded" src="/image1.jpg" alt="Instagram Influencer" priority="true" /> */}

        

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
          <div className="col-md-12 col-12 btn signup-btn-grad-main mx-auto">
            I&apos;m a Brand
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="col-md-12 col-12 btn login-btn-grad-main mx-auto">
            I&apos;m a Creator
          </div>
        </div>
      </div>

      <div className="container row justify-content-center mt-5 mb-5 pt-4 pb-4 mx-auto">
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          15k+ <br /> <span className="body-bottom-tag-styles">Influencers</span>
        </div>
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          {'>5.6%'} <br /> <span className="body-bottom-tag-styles">Engagement.R</span>
        </div>
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          1.2 M <br /> <span className="body-bottom-tag-styles">Avg. Reach</span>
        </div>
        <div className="container col-6 col-md-3 col-lg-3 text-center body-tag-styles">
          70 k+ <br /> <span className="body-bottom-tag-styles">Avg. Likes</span>
        </div>
      </div>
    </>
  );
}

export default BodyMain;
