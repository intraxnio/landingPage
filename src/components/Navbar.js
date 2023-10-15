import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/broadreachLogo.png'

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light mt-2">

            <div className="container-fluid" > 
                {/* <Link href="/"><a className="navbar-brand text-success" ><Image src={logo} style={{ maxWidth: '100px', maxHeight: '50px', marginLeft: '10px' }} alt="buzzreach" /></a></Link> */}
                <Link href="/"><a className="navbar-brand" style={{fontSize: '22px', fontWeight: 500, color: '#11009E', fontFamily: "Poppins" }} >BroadReach<span style={{color: '#D80032', fontSize: '28px'}}>.</span></a></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-center navbar-collapse ms-md-5" id="navbarNav">
                    <ul className="navbar-nav md-5">
                        <li className="nav-item me-5 ms-2">
                            <Link href="/"><a className="nav-link active my-2 g-fonts" aria-current="page" style={{textDecoration: 'none'}}>Home</a></Link>
                        </li>

                        <li className="nav-item dropdown me-5 my-2 ms-2">
                            <Link href="#" ><a className="nav-link dropdown-toggle g-fonts" role="button" data-bs-toggle="dropdown" aria-expanded="false">Platform</a></Link>
                            <ul className="dropdown-menu custom-drop-width pt-3 pb-3 custom-box-shadow-navbar">
                                <div className="container row mx-auto">
                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xe0b6;</span></div>
                                    <div className="col-10 col-md-10"> <Link href="/influencer-Marketing"><a className="subhead-decoration" >Influencer Marketing</a></Link> <br />
                                        <span className="head-sub-head">Explore, Collaborate, Promote attention-grabbing content</span></div>
                                </div>

                                <div className="container row mx-auto pt-2">

                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xea1d;</span></div>
                                    <div className="col-10 col-md-10"> <Link href="/find-influencers"><a className="subhead-decoration">Find Influencer</a></Link><br />
                                        <span className="head-sub-head">Choose your niche specific content creators</span></div>

                                </div>

                                <div className="container row mx-auto pt-2">
                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xe8e5;</span></div>
                                    <div className="col-10 col-md-10 "> <Link href="/campaign-analytics"><a className="subhead-decoration" >Reports & Analytics</a></Link><br />
                                        <span className="head-sub-head">Real-time analytics and analyse performance</span></div>
                                </div>

                                <div className="container row mx-auto pt-2">
                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xeaf7;</span></div>
                                    <div className="col-10 col-md-10 "> <Link href="/influencer-payments"><a className="subhead-decoration" >Influencer Payments</a></Link><br />
                                        <span className="head-sub-head">Individual&apos;s trust: made same day payments possible</span></div>
                                </div>

                            </ul>
                        </li>

                        <li className="nav-item dropdown me-5 my-2 ms-2">
                            <Link href="#" ><a className="nav-link dropdown-toggle g-fonts" role="button" data-bs-toggle="dropdown" aria-expanded="false">Campaigns</a></Link>
                            <ul className="dropdown-menu custom-drop-width pt-3 pb-3 custom-box-shadow-navbar">
                                <div className="container row mx-auto">
                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xe0b6;</span></div>
                                    <div className="col-10 col-md-10"> <Link href="/create-campaigns"><a className="subhead-decoration">DIY Campaigns</a></Link><br />
                                        <span className="head-sub-head">Now Create a Campaign in 3 Super Easy Steps</span></div>
                                </div>

                                {/* <div className="container row mx-auto pt-2">

                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xea1d;</span></div>
                                    <div className="col-10 col-md-10"> <Link href="/find-influencers"><a className="subhead-decoration" >Influencer Insights</a></Link> <br />
                                        <span className="head-sub-head">Choose your niche specific content creators</span></div>

                                </div> */}

                                <div className="container row mx-auto pt-2">
                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xe8e5;</span></div>
                                    <div className="col-10 col-md-10 "> <Link href="/campaign-analytics"><a className="subhead-decoration" >Campaign Analytics</a></Link> <br />
                                        <span className="head-sub-head">Real-time analytics and analyse performance</span></div>
                                </div>


                            </ul>
                        </li>

                        <li className="nav-item dropdown me-5 my-2 ms-2">
                            <Link href="#"><a className="nav-link dropdown-toggle g-fonts" role="button" data-bs-toggle="dropdown" aria-expanded="false"> For Influencers</a></Link>
                            <ul className="dropdown-menu custom-drop-width pt-3 pb-3 custom-box-shadow-navbar">
                                <div className="container row mx-auto">
                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xe0b6;</span></div>
                                    <div className="col-10 col-md-10"> <Link  href="/influencer-Marketing"><a className="subhead-decoration">How to collaborate</a></Link><br />
                                        <span className="head-sub-head">Download App, Collaborate & Promote attention-grabbing content</span></div>
                                </div>

                                <div className="container row mx-auto pt-2">

                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xea1d;</span></div>
                                    <div className="col-10 col-md-10"> <Link href="/influencer-payments"><a className="subhead-decoration">How payment works</a></Link><br />
                                        <span className="head-sub-head">24hrs window for the payment Disbursel</span></div>

                                </div>

                            </ul>
                        </li>

                        <li className="nav-item me-5 ms-2">
                            <Link href="/pricing"><a className="nav-link my-2 g-fonts" aria-current="page" style={{textDecoration: 'none'}}>Pricing</a></Link>
                        </li>


                        <div className="container my-2 ms-md-3">
                        <Link href="/pricing"><button className="btn px-1 login-btn-grad btn-g-fonts text-white">Get Started</button></Link>

                        </div>


                    </ul>
                </div>
            </div>


        </nav>




    )
}
