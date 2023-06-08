import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import marketing from "../../public/influencerMarketing.jpg"

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LDVV1R1TVX"></script>
      </Head>


      <Navbar />
      <div className="container">
        <Image className="img-fluid" src={marketing} alt="influencer Marketing" />
      </div>

      <div className="container mt-5">
        <div className="container row mx-auto">
          <div className="col-12 col-md-6 col-lg-6 my-auto">
            <div className="row bb-txt-1"><h1><span className="creator-underline">Influencer Marketing</span> is a powerful tool for Brands.</h1></div>
            <div className="row bb-txt-2"><p>Content creation has become more important than ever for businesses looking to build a strong online 
              presence. <br /><br /> However, creating engaging content that resonates with your target audience can be a daunting task. 
              <br />That&apos;s where influencer marketing comes in. <br /><br />
              By partnering with influencers in your niche, you can leverage their reach and credibility to amplify 
              your brand&apos;s message and drive engagement. But how do you find the right influencers for your brand ? <br /><br />
              <code>Buzzreach</code> will help you identify the influencers that align with your brand values and target audience.</p></div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <img className="img-fluid rounded" src="/banner1.webp" alt="banner" width={500} height={500} />
          </div>
        </div>
      </div>



      <div className="container row btn-container justify-content-center">
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
            <div className="row bb-txt-1"><h1>It&apos;s great to start out on your <span className="creator-underline">own.</span></h1></div>
            <div className="row bb-txt-2"><p>Our influencer website puts the power of<span className="span-49"> influencer advertising</span> directly in your hands,
              allowing you to select the best influencers on Instagram for your campaign. <br /><br /> You have the freedom to choose a fabulous picture or video to be
              posted on influencers&apos; accounts, and with our user-friendly analytics and reports, no marketing analyst is needed to understand the results
              of your influencer marketing campaign. <br /><br /> Sign up with our influencer company today and start maximizing your brand&apos;s potential.</p></div>
          </div>


        </div>
      </div>

      <div className="container row btn-container justify-content-center mb-5">
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