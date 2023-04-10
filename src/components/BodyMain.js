import React from 'react'
import Image from 'next/image'
import banner from '../../public/banner.svg'

function BodyMain() {
    return (
        <>

            <div className="container mx-auto row">
                <div className="container col-md-8 col-lg-8">
                    <div className="row txt-1">More than influencer marketing software</div>
                    <div className="row txt-2">The #1 Creator</div>
                    <div className="row txt-3">Management Platform for Athlete Marketing</div>
                    <div className="row txt-4">GRIN is the world`s first creator management platform, turning
                        brands into household names through the power of authentic content creator.</div>
                </div>
                <div className="col-md-4 col-lg-4 img-1"> <Image className="img-fluid rounded-5" src={banner} alt="banner" /> </div>
            </div >

            <div className="container row btn-container mx-auto">
                <div className="col-md-3 col-6">
                    <div className="col-md-12 col-12 btn signup-btn-grad">I`m Brand</div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="col-md-12 col-12 btn login-btn-grad">I `m Creator</div>
                </div>
            </div>







        </>
    )
}

export default BodyMain