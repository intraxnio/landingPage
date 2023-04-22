import React from 'react'


function BodyBlocks() {
  return (
    <>

    <div className="container">
        <div className="container row mx-auto">
            <div className="col-12 col-md-6 col-lg-6 my-auto">
                <div className="row bb-txt-1"><p>Are you a <span className="creator-underline">Micro Influencer ?</span></p></div>
                <div className="row bb-txt-2"><p>Find the perfect brand collaborations. Our marketplace connects 
                    <span className="span-70"> micro influencers</span> like you with brands in need of authentic collaborations.</p></div>
                <div className="row bb-txt-3"><p><span className="check-1"></span>&nbsp;&nbsp;&nbsp;Connect with your favourite brands</p></div>
                <div className="row bb-txt-4"><p><span className="check-2"></span>&nbsp;&nbsp;&nbsp;Create & post on your Instagram</p></div>
                <div className="row bb-txt-5"><p><span className="check-3"></span>&nbsp;&nbsp;&nbsp;Start earning today on Intraxn</p></div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
                {/* <Image className="img-fluid rounded" src={banner1} alt="creator image" /> */}
                <img className="img-fluid rounded" src="/banner1.webp" alt="banner" width={500} height={500} />
                

                {/* <Image className="img-fluid rounded"
            src={"https://intraxn-app.s3.ap-south-1.amazonaws.com/banner1.webp"}
            width={800}
            height={800}
            alt="passion into profession"
          /> */}

                
            </div>
        </div>
    </div>

    <div className="container mt-3">
        <div className="container row mx-auto">
        <div className="col-12 col-md-6 col-lg-6 order-2 order-md-0 order-lg-0">
        {/* <Image className="img-fluid rounded" src={banner2} alt="Social Media" />
         */}

<img className="img-fluid rounded" src="/banner2.webp" alt="social Media" width={500} height={500} />

                {/* <Image className="img-fluid rounded"
            src={"https://intraxn-app.s3.ap-south-1.amazonaws.com/banner2.webp"}
            width={800}
            height={800}
            alt="Social Media"
          /> */}
            </div>

            <div className="col-12 col-md-6 col-lg-6 my-auto">
                <div className="row bb-txt-1"><p>Are you a <span className="creator-underline">Brand ?</span></p></div>
                <div className="row bb-txt-2"><p><span className="span-49">49%</span> of consumers say, they depend on influencer recommendations before they buy anything. 
              <span className="span-70">70%</span> of teens trust creator content more than a celebrity endorsement.</p></div>
                <div className="row bb-txt-3"><p><span className="check-1"></span>&nbsp;&nbsp;&nbsp;Big impact on Marketing ROI</p></div>
                <div className="row bb-txt-4"><p><span className="check-2"></span>&nbsp;&nbsp;&nbsp;Highest engagement rate of 6%</p></div>
                <div className="row bb-txt-5"><p><span className="check-3"></span>&nbsp;&nbsp;&nbsp;Low budget; More brand reach</p></div>
            </div>

            
        </div>
    </div>

    <div className="container mt-3">
        <div className="container row mx-auto">
            <div className="col-12 col-md-6 col-lg-6 my-auto">
                <div className="row bb-txt-1"><p><span className="span-underline">Reporting & Analytics</span></p></div>
                <div className="row bb-txt-2"><p>It&apos;s not just a marketplace. Get Real time analytics and engagement metrics of your promotion on your dashboard.
                Reporting ROI is at ease.</p></div>
                <div className="row bb-txt-3"><p><span className="check-1"></span>&nbsp;&nbsp;&nbsp;Accurate & Real-Time Analytics</p></div>
                <div className="row bb-txt-4"><p><span className="check-2"></span>&nbsp;&nbsp;&nbsp;Download & Share Reports</p></div>
                <div className="row bb-txt-5"><p><span className="check-3"></span>&nbsp;&nbsp;&nbsp;Compare Campaigns & Metrics</p></div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
        {/* <Image className="img-fluid rounded" src={banner3} alt="Business Growth" /> */}
<img className="img-fluid rounded" src="/banner3.webp" alt="Business Growth" width={500} height={500} />



                {/* <Image className="img-fluid rounded"
            src={"https://intraxn-app.s3.ap-south-1.amazonaws.com/banner3.webp"}
            width={800}
            height={800}
            alt="Sales Growth"
          /> */}
            </div>
        </div>
    </div>

    </>
  )
}

export default BodyBlocks