import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);

  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };


    return (
    <>

<Head>
        <title>Pricing: BroadReach</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="HvvX1gisMdTNXS66CRCrbZTdRWr_q-P5JXjMDhwP3_4" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D0SY7XGY0L"></script>
       
        
      </Head>

    <Navbar />


    <div className="container mt-5 mb-5">
  <div className="text-center">
    <div className={`btn-group custom-btn-group ${isMonthly ? 'monthly' : 'yearly'}`} role="group">
      <button
        type="button"
        className={`btn ${isMonthly ? 'price-btn-color-1' : 'price-btn-color-2'} ${isMonthly ? 'active' : ''}`}
        onClick={togglePricing}
      >
        Monthly
      </button>
      <button
        type="button"
        className={`btn ${isMonthly ? 'price-btn-color-1' : 'price-btn-color-2'} ${isMonthly ? '' : 'active'}`}
        onClick={togglePricing}
      >
        Annual (2 months free)
      </button>
    </div>
  </div>
</div>





    <div className="container row mx-auto mb-5">

                <div className="col-12 col-md-6 col-lg-6 my-auto py-3">
              <div className="border border-primary rounded p-3">
                <div className="row text-center">
                  <p><span className="pricing-txt"> Forever Free</span></p>
                  <p><span className="pricing-txt-price"> {isMonthly ? '$0' : '$0'}</span></p>


                 
                </div>

              <div className="features-details">

                            <div className="bb-txt-3 cussLine">
                              <span className="material-icons">campaign</span>
                              <p>&nbsp;&nbsp;&nbsp;1 Campaign</p>
                            </div>

                            <div className="bb-txt-3 cussLine">
                            <span class="material-icons">all_inclusive</span>
                              <p>&nbsp;&nbsp;&nbsp;Unlimited influencer requests</p>
                            </div>

                            <div className="bb-txt-3 cussLine">
                            <span class="material-icons">bar_chart</span>
                              <p>&nbsp;&nbsp;&nbsp;Real time analytics</p>
                            </div>

                            <div className="bb-txt-3 cussLine">
                            <span class="material-icons">description</span>
                              <p>&nbsp;&nbsp;&nbsp;Whitelabel Reporting</p>
                            </div>

                            <div className="bb-txt-3 cussLine">
                            <span class="material-icons">query_stats</span>
                              <p>&nbsp;&nbsp;&nbsp;Creator Insights</p>
                            </div>

                            <div className="bb-txt-3 cussLine">
                            <span class="material-icons">done_all</span>
                              <p>&nbsp;&nbsp;&nbsp;AI post verification</p>
                            </div>

                            <div className="bb-txt-3 cussLine">
                            <span class="material-icons">mail</span>
                              <p>&nbsp;&nbsp;&nbsp;Email Support</p>
                            </div>

                            <div className="bb-txt-3 cussLine">
                            <span class="material-icons">call</span>
                              <p>&nbsp;&nbsp;&nbsp;Phone Support</p>
                            </div>

              </div>

              
                        <div className="container my-4 mx-auto d-flex justify-content-center">
                <button className="btn login-btn-grad btn-g-fonts text-white">Get Started</button>
              </div>



              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-6 my-auto py-3">
              <div className="border border-primary rounded p-3">
                <div className="row text-center">
                <p><span className="pricing-txt"> Start Up</span></p>
                  <p><span className="pricing-txt-price"> {isMonthly ? '$490' : '$49'}</span></p>
                </div>
               
                <div className="features-details">

                  <div className="bb-txt-3 cussLine">
                    <span className="material-icons">campaign</span>
                    <p>&nbsp;&nbsp;&nbsp;Unlimited Campaigns</p>
                  </div>

                  <div className="bb-txt-3 cussLine">
                  <span class="material-icons">all_inclusive</span>
                    <p>&nbsp;&nbsp;&nbsp;Unlimited influencer requests</p>
                  </div>

                  <div className="bb-txt-3 cussLine">
                  <span class="material-icons">bar_chart</span>
                    <p>&nbsp;&nbsp;&nbsp;Real time analytics</p>
                  </div>

                  <div className="bb-txt-3 cussLine">
                  <span class="material-icons">description</span>
                    <p>&nbsp;&nbsp;&nbsp;Whitelabel Reporting</p>
                  </div>

                  <div className="bb-txt-3 cussLine">
                   <span class="material-icons">query_stats</span>
                    <p>&nbsp;&nbsp;&nbsp;Creator Insights</p>
                  </div>

                  <div className="bb-txt-3 cussLine">
                    <span class="material-icons">done_all</span>
                      <p>&nbsp;&nbsp;&nbsp;AI post verification</p>
                    </div>

                  <div className="bb-txt-3 cussLine">
                  <span class="material-icons">mail</span>
                    <p>&nbsp;&nbsp;&nbsp;Email Support</p>
                  </div>

                  <div className="bb-txt-3 cussLine">
                  <span class="material-icons">call</span>
                    <p>&nbsp;&nbsp;&nbsp;Phone Support</p>
                  </div>

                  </div>

                  <div className="container my-4 mx-auto d-flex justify-content-center">
                <button className="btn signup-btn-grad btn-g-fonts text-white">Get Started</button>
              </div>


               
              </div>
            </div>
        
    </div>








      <Footer />

    </>
  )




}



export default Pricing