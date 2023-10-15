import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'


function findCreator() {
  return (
    <>

      <Head>
        <title>How to find influencers to promote my product: BroadReach</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Collaborate with top Instagram influencers to reach new audiences. 
        Find your perfect influencer match with our powerful influencer platform." />
        <meta content="How to find influencers to promote my product: BroadReach" property="og:title" />
        <meta content="Collaborate with top Instagram influencers to reach new audiences. 
        Find your perfect influencer match with our powerful influencer platform." property="og:description" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="Zv0pxrxBGEMiesq_ydWWlCKLB8YiChp4x_TiozuRmaw" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LDVV1R1TVX"></script>
        
        
      </Head>


      <Navbar />
      
      <div className="container">
        <img className="img-fluid" src="/find-creator.jpg" alt="influencer Marketing" />
      </div>

      <div className="container mt-5">
        <div className="container row mx-auto">
          <div className="col-12 col-md-6 col-lg-6 my-auto">
            <div className="row bb-txt-1"><h1>Choice of a <br /> <span className="creator-underline">perfect influencers</span>.</h1></div>
            <div className="row bb-txt-2"><p>Our influencer platform offers a range of options for influencer outreach,
              including social influencers on Instagram. You can create a tailored influencer marketing strategy that
              targets top Instagram micro-influencers in your niche. <br /> <br />
              Our influencer marketing platform offers category-wise filters to help you choose niche-specific influencers
              in areas like Food, Clothing, Entertainment, Vlogging, and more. <br /><br /> Simply select your preferred categories and
              we&apos;ll provide you with a list of corresponding micro-influencers on your Dashboard with a handful of filters. </p></div>
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
            <div className="row bb-txt-1"><h1>More <span className="creator-underline">Insights</span> of an influencer</h1></div>
            <div className="row bb-txt-2"><p>A bunch of more detailed insights and analytics about our influencers can help you understand 
              getting more brand reach.</p></div>
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

      <div className="container-fluid mx-auto custom-container-dimensions">
        <div className="row">
          <div className="col-md-6 col-12 txt-2 text-center my-auto"><p>Finalize influencer<br /> <span className="creator-underline"> in 2 minutes</span></p> </div>
          <div className="col-md-6 col-12 my-auto">
            <div className="container mx-auto h2 pt-2">Pick micro-influencers who match your audience.</div>
            <div className="container mx-auto row pt-2 pb-4">Target the right audience by selecting niche content creators.</div>
            <div className="container mx-auto "> <div className="col-md-12 col-12 btn signup-btn-grad">
            Find Influencer
          </div></div>
            </div>
        </div>
      </div>

      <Footer />


    </>
  )
}

export default findCreator