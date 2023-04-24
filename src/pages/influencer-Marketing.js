import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'

function influencerMarketing() {
  return (
    <>

      <Head>
        <title>What is Influencer Marketing: Winning Strategy for Brand Reach</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Collaborate with top Instagram influencers to reach new audiences. 
        Find your perfect influencer match with our powerful influencer platform." />
        <meta content="What is Influencer Marketing: Winning Strategy for Brand Reach" property="og:title" />
        <meta content="Collaborate with top Instagram influencers to reach new audiences. 
        Find your perfect influencer match with our powerful influencer platform." property="og:description" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="Zv0pxrxBGEMiesq_ydWWlCKLB8YiChp4x_TiozuRmaw" />
      </Head>


      <Navbar />
      <div className="container">
        <img className="img-fluid" src="/influencerMarketing.jpg" alt="influencer Marketing" />
      </div>

      <div className="container mt-5">
        <div className="container row mx-auto">
          <div className="col-12 col-md-6 col-lg-6 my-auto">
            <div className="row bb-txt-1"><p>The choice of a <br /> <span className="creator-underline"> perfect influencer</span> is yours.</p></div>
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



      <div className="container row btn-container mx-auto justify-content-center">
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
            <div className="row bb-txt-1"><p>It&apos;s great to start out on  <br /> your<span className="creator-underline"> own.</span></p></div>
            <div className="row bb-txt-2"><p>Our influencer website puts the power of<span className="span-49"> influencer advertising</span> directly in your hands,
              allowing you to select the best influencers on Instagram for your campaign. <br /><br /> You have the freedom to choose a fabulous picture or video to be
              posted on influencers&apos; accounts, and with our user-friendly analytics and reports, no marketing analyst is needed to understand the results
              of your influencer marketing campaign. <br /><br /> Sign up with our influencer company today and start maximizing your brand&apos;s potential.</p></div>
          </div>


        </div>
      </div>

      <div className="container row btn-container mx-auto justify-content-center mb-5">
        <div className="col-md-3 col-6">
          <div className="col-md-12 col-12 btn signup-btn-grad">
            Signup Today
          </div>
        </div>

      </div>

      <Footer />


    </>
  )
}

export default influencerMarketing