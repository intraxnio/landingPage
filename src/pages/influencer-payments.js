import React from 'react'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Link from 'next/link'


function creatorPayments() {
  return (
    <>

      <Head>
        <title>Influencer Payments Made Simple - Same Day Disbursement</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Say Goodbye to payment delays. We keep our Influencers happy
        with same-day disbursements. Best Influencer Platform." />
        <meta content="Influencer Payments Made Simple - Same Day Disbursement" property="og:title" />
        <meta content="Say Goodbye to payment delays. We keep our Influencers happy
        with same-day disbursements. Best Influencer Platform." property="og:description" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="HvvX1gisMdTNXS66CRCrbZTdRWr_q-P5JXjMDhwP3_4" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D0SY7XGY0L"></script>
      </Head>


      <Navbar />
      
      <div className="container">
        <img className="img-fluid" src="/creator-payments.jpg" alt="influencer-payments" />
      </div>

      <div className="container mt-5">
        <div className="container row mx-auto">
          <div className="col-12 col-md-6 col-lg-6 my-auto">
            <div className="row bb-txt-1"><h1>Payments on the <span className="creator-underline">Same-Day</span>.</h1></div>
            <div className="row bb-txt-2"><p>Instagram post verification will get done by our sophisticated AI.
              After verification, the payment will get released to the influencer on the same day. Certain RBI guidelines need to be followed. 
              Find more <Link href="/terms-conditions" className="text-decoration-none">terms</Link>  here.<br /><br />
               </p></div>
               <div className="row bb-txt-3"><p><span className="check-1"></span>&nbsp;&nbsp;&nbsp;Complete KYC</p></div>
                <div className="row bb-txt-4"><p><span className="check-2"></span>&nbsp;&nbsp;&nbsp;Verify Bank Account</p></div>
                <div className="row bb-txt-5"><p><span className="check-3"></span>&nbsp;&nbsp;&nbsp;Get Paid</p></div>
                <h3 className="text-secondary">that&apos;s it</h3>
          
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <img className="img-fluid rounded" src="/banner1.webp" alt="banner" width={500} height={500} />
          </div>
        </div>
      </div>



      <div className="container row justify-content-center pb-5">
        <div className="col-md-3 col-6">
          <div className="col-md-12 col-12 btn login-btn-grad">
            Signup Now
          </div>
        </div>

      </div>



      <Footer />


    </>
  )
}

export default creatorPayments