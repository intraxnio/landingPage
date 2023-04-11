import React from 'react'
import Image from 'next/image'
import banner from '../../public/banner.svg'

function BodyMain() {
    return (
        <>

            <div className="container mx-auto row">
                <div className="container col-md-8 col-lg-8">
                    <div className="row txt-1">
                        <p>Micro Influencers bring <span id="megaRes">Mega Results</span></p> 
                    </div>
                    <div className="row txt-2">The Affordable</div>
                    <div className="row txt-3">
                       <p> Way to Amplify your Brand. <br/> Boost <span className="gradient-text"> Sales</span>; Not <span id="budRes"> Budget</span></p></div>
                    <div className="row txt-4">
                        <p>Intraxn is a <span className="span-underline">micro-influencer platform</span>, where Brands
                        meet influencers in making ever most affordable collaborations.</p></div>
                </div>
                <div className="col-md-4 col-lg-4 img-1"> <Image className="img-fluid rounded-5" src={banner} alt="banner" /> </div>
            </div >

            <div className="container row btn-container mx-auto">
                <div className="col-md-3 col-6">
                    <div className="col-md-12 col-12 btn signup-btn-grad">I`m a Brand</div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="col-md-12 col-12 btn login-btn-grad">I `m a Creator</div>
                </div>
            </div>







        </>
    )
}

export default BodyMain