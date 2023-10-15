import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'

function analytics() {
  return (
    <>

      <Head>
        <title>Influencer Marketing Insights: Campaign Reports and Analytics Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Easy-to-understand campaign reports and analytics directly on your Dashboard. 
        Track engagement rates, impressions, reach, and conversions etc." />
        <meta content="Influencer Marketing Insights: Campaign Reports and Analytics Dashboard" property="og:title" />
        <meta content="Easy-to-understand campaign reports and analytics directly on your Dashboard. 
        Track engagement rates, impressions, reach, and conversions etc." property="og:description" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="Zv0pxrxBGEMiesq_ydWWlCKLB8YiChp4x_TiozuRmaw" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LDVV1R1TVX"></script>
        
      </Head>


      <Navbar />
      
      <div className="container">
        <img className="img-fluid" src="/reports-analytics.jpg" alt="reports & analytics" />
      </div>

      <div className="container mt-5">
        <div className="container row mx-auto">
          <div className="col-12 col-md-6 col-lg-6 my-auto">
            <div className="row bb-txt-1"><h1>Campaign<br /> <span className="creator-underline"> Reports & Analytics</span>.</h1></div>
            <div className="row bb-txt-2"><p>BroadReach dashboard generates detailed reports and analytics, helping brands gain a deeper understanding 
              of campaign performance and ROI. <br /><br /> With access to real-time data, brands can optimize their campaigns and maximize their results. 
               <br /><br /> Our platform also offers features such as influencer discovery and management, seamless campaign execution, and detailed performance metrics. 
              By partnering with us, brands can unlock the full potential of influencer marketing and take their campaigns to the next level.
              </p></div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <img className="img-fluid rounded" src="/banner1.webp" alt="banner" width={500} height={500} />
          </div>
        </div>
      </div>



      <div className="container row justify-content-center">
        <div className="col-md-3 col-6">
          <div className="col-md-12 col-12 btn login-btn-grad">
            Get Started
          </div>
        </div>

      </div>


      <div className="container mt-5">

        <div className="container row mx-auto">

          <div className="col-12 col-md-6 col-lg-6 order-2 order-md-0 order-lg-0">
            <img className="img-fluid rounded" src="/banner2.webp" alt="social Media" width={500} height={500} />
          </div>

          <div className="col-12 col-md-6 col-lg-6 my-auto">
            <div className="row bb-txt-1"><h1>More <span className="creator-underline">Insights</span> of a Campaign</h1></div>
            <div className="row bb-txt-2"><p>Access to detailed insights and analytics about your influencer marketing campaign can provide valuable information that enables 
              you to maximize brand reach. <br /><br /> By understanding which content and influencers are resonating with your target audience, 
              you can optimize your strategy and drive better results.</p></div>
            <div className="row bb-txt-3"><p><span className="check-1"></span>&nbsp;&nbsp;&nbsp;Reach</p></div>
            <div className="row bb-txt-4"><p><span className="check-2"></span>&nbsp;&nbsp;&nbsp;Impressions</p></div>
            <div className="row bb-txt-5"><p><span className="check-3"></span>&nbsp;&nbsp;&nbsp;Engagement Rate & more</p></div>
          </div>


        </div>
      </div>

      <div className="container row justify-content-center mb-5">
        <div className="col-md-3 col-6">
          <div className="col-md-12 col-12 btn login-btn-grad">
            Signup Today
          </div>
        </div>

      </div>

      <div className="container-fluid mx-auto custom-container-dimensions-1">
        <div className="row">
          <div className="col-md-6 col-12 txt-2 text-center my-auto"><p>Create Campaign<br /> <span className="creator-underline"> in 5 minutes</span></p> </div>
          <div className="col-md-6 col-12 my-auto">
            <div className="container mx-auto h2 pt-2">With in 3 easy steps, campaign can be created.</div>
            <div className="container mx-auto row pt-2 pb-4">Upload content, deliverables & pick influencers and go live!</div>
            <div className="container mx-auto "> <div className="col-md-12 col-12 btn login-btn-grad">
            Create Campaign
          </div></div>
            </div>
        </div>
      </div>

      <Footer />


    </>
  )
}

export default analytics