import React from 'react'
import Image from 'next/image'
import banner1 from '../../public/banner1.svg'
import banner2 from '../../public/banner2.svg'
import banner3 from '../../public/banner3.jpg'


function BodyBlocks() {
  return (
    <>

    <div className="container">
        <div className="container row mx-auto">
            <div className="col-12 col-md-6 col-lg-6 my-auto">
                <div className="row bb-txt-1">Social Media Integrations</div>
                <div className="row bb-txt-2">The ability to link and display an athlete`s social media accounts
                and engagement metrics in real time so you always know your worth</div>
                <div className="row bb-txt-3"><p><span>&#10004;</span>&nbsp;&nbsp;&nbsp;Accurate & Real-Time Data</p></div>
                <div className="row bb-txt-4"><p><span>&#10004;</span>&nbsp;&nbsp;&nbsp;Say Goodbye to Screenshots</p></div>
                <div className="row bb-txt-5"><p><span>&#10004;</span>&nbsp;&nbsp;&nbsp;Improve earning potential</p></div>
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
                <div className="row bb-txt-1">Social Media Integrations</div>
                <div className="row bb-txt-2">The ability to link and display an athlete`s social media accounts
                and engagement metrics in real time so you always know your worth</div>
                <div className="row bb-txt-3"><p><span>&#10004;</span>&nbsp;&nbsp;&nbsp;Accurate & Real-Time Data</p></div>
                <div className="row bb-txt-4"><p><span>&#10004;</span>&nbsp;&nbsp;&nbsp;Say Goodbye to Screenshots</p></div>
                <div className="row bb-txt-5"><p><span>&#10004;</span>&nbsp;&nbsp;&nbsp;Improve earning potential</p></div>
            </div>

            
        </div>
    </div>

    <div className="container">
        <div className="container row mx-auto">
            <div className="col-12 col-md-6 col-lg-6 my-auto">
                <div className="row bb-txt-1">Social Media Integrations</div>
                <div className="row bb-txt-2">The ability to link and display an athlete`s social media accounts
                and engagement metrics in real time so you always know your worth</div>
                <div className="row bb-txt-3"><p><span>&#10004;</span>&nbsp;&nbsp;&nbsp;Accurate & Real-Time Data</p></div>
                <div className="row bb-txt-4"><p><span>&#10004;</span>&nbsp;&nbsp;&nbsp;Say Goodbye to Screenshots</p></div>
                <div className="row bb-txt-5"><p><span>&#10004;</span>&nbsp;&nbsp;&nbsp;Improve earning potential</p></div>
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