import React from 'react'
import Image from 'next/image'
import banner1 from '../../public/banner1.svg'
import banner2 from '../../public/banner2.webp'
import banner3 from '../../public/banner3.webp'


function BodyBlocks() {
  return (
    <>

    <div className="container">
        <div className="container row mx-auto">
            <div className="col-12 col-md-6 col-lg-6 my-auto">
                <div className="row bb-txt-1"><p>Are you a <span className="creator-underline">Micro Influencer ?</span></p></div>
                <div className="row bb-txt-2"><p>You are an incredible individual and have built up a community of <span className="span-70">90% loyal</span> and dedicated followers who value your opinions and recommendations.</p></div>
                <div className="row bb-txt-3"><p><span className="check-1"></span>&nbsp;&nbsp;&nbsp;Connect with your favourite brands</p></div>
                <div className="row bb-txt-4"><p><span className="check-2"></span>&nbsp;&nbsp;&nbsp;Promote posts on your Instagram</p></div>
                <div className="row bb-txt-5"><p><span className="check-3"></span>&nbsp;&nbsp;&nbsp;Earn money today on Intraxn</p></div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
                <Image className="img-fluid rounded" src={banner1} alt="creator image" />
            </div>
        </div>
    </div>

    <div className="container mt-3">
        <div className="container row mx-auto">
        <div className="col-12 col-md-6 col-lg-6 order-2 order-md-0 order-lg-0">
                <Image className="img-fluid rounded" src={banner2} alt="social media" />
            </div>

            <div className="col-12 col-md-6 col-lg-6 my-auto">
                <div className="row bb-txt-1"><p>Are you a <span className="creator-underline">Brand ?</span></p></div>
                <div className="row bb-txt-2"><p><span className="span-49">49%</span> of consumers say they depend on influencer recommendations before they buy anything.
               It`s no wonder why <span className="span-70">70%</span> of teens trust creator content more than a celebrity endorsement.</p></div>
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
                <div className="row bb-txt-2"><p>It`s not just a marketplace. Get Real time analytics and engagement metrics of your promotion on your dashboard.
                Reporting ROI is at ease.</p></div>
                <div className="row bb-txt-3"><p><span className="check-1"></span>&nbsp;&nbsp;&nbsp;Accurate & Real-Time Analytics</p></div>
                <div className="row bb-txt-4"><p><span className="check-2"></span>&nbsp;&nbsp;&nbsp;Download & Share Reports</p></div>
                <div className="row bb-txt-5"><p><span className="check-3"></span>&nbsp;&nbsp;&nbsp;Compare Campaigns & Metrics</p></div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
                <Image className="img-fluid rounded" src={banner3} alt="social media" />
            </div>
        </div>
    </div>

    </>
  )
}

export default BodyBlocks