import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/Intraxn-logo.svg'

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light mt-2">

            <div className="container-fluid">
                <Link className="navbar-brand text-success" href="/"> <Image src={logo} alt="intraxn" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-center navbar-collapse ms-md-5" id="navbarNav">
                    <ul className="navbar-nav ms-md-5">
                        <li className="nav-item me-5 ms-2">
                            <Link className="nav-link active my-2 g-fonts" aria-current="page" href="/">Home</Link>
                        </li>

                        <li className="nav-item dropdown me-5 my-2 ms-2">
                            <Link className="nav-link dropdown-toggle g-fonts" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Platform
                            </Link>
                            <ul className="dropdown-menu custom-drop-width pt-3 pb-3 custom-box-shadow-navbar">
                                <div className="container row mx-auto">
                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xe0b6;</span></div>
                                    <div className="col-10 col-md-10"> <Link className="subhead-decoration"href="/influencer-Marketing"> Influencer Marketing <br />
                                    <span className="head-sub-head">Explore, Collaborate, Promote attention-grabbing content</span></Link></div>
                                </div>

                                <div className="container row mx-auto pt-2">
                               
                               <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xea1d;</span></div>
                               <div className="col-10 col-md-10"> <Link className="subhead-decoration"href="/find-Creator"> Find Creator <br />
                               <span className="head-sub-head">Choose your niche specific content creators</span></Link></div>
                        
                           </div>

                           <div className="container row mx-auto pt-2">
                               <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xe8e5;</span></div>
                               <div className="col-10 col-md-10 "> <Link className="subhead-decoration"href="analytics"> Reports & Analytics <br />
                               <span className="head-sub-head">Real-time analytics and analyse performance</span></Link></div>
                           </div>

                           <div className="container row mx-auto pt-2">
                               <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xeaf7;</span></div>
                               <div className="col-10 col-md-10 "> <Link className="subhead-decoration"href="creator-Payments"> Creator Payment <br />
                               <span className="head-sub-head">Individual&apos;s trust: made same day payments possible</span></Link></div>
                           </div>

                            </ul>
                        </li>

                        <li className="nav-item dropdown me-5 my-2 ms-2">
                            <Link className="nav-link dropdown-toggle g-fonts" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                No Middleman
                            </Link>
                            <ul className="dropdown-menu custom-drop-width pt-3 pb-3 custom-box-shadow-navbar">
                                <div className="container row mx-auto">
                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xe0b6;</span></div>
                                    <div className="col-10 col-md-10"> <Link className="subhead-decoration"href="/influencer-Marketing"> DIY Campaigns <br />
                                    <span className="head-sub-head">Explore, Collaborate, Promote attention-grabbing content</span></Link></div>
                                </div>

                                <div className="container row mx-auto pt-2">
                               
                               <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xea1d;</span></div>
                               <div className="col-10 col-md-10"> <Link className="subhead-decoration"href="/find-Creator"> Creator Insights <br />
                               <span className="head-sub-head">Choose your niche specific content creators</span></Link></div>
                        
                           </div>

                           <div className="container row mx-auto pt-2">
                               <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xe8e5;</span></div>
                               <div className="col-10 col-md-10 "> <Link className="subhead-decoration"href="analytics"> AI Verify <br />
                               <span className="head-sub-head">Real-time analytics and analyse performance</span></Link></div>
                           </div>

                    
                            </ul>
                        </li>

                        <li className="nav-item dropdown me-5 my-2 ms-2">
                            <Link className="nav-link dropdown-toggle g-fonts" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                For Influencers
                            </Link>
                            <ul className="dropdown-menu custom-drop-width pt-3 pb-3 custom-box-shadow-navbar">
                                <div className="container row mx-auto">
                                    <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xe0b6;</span></div>
                                    <div className="col-10 col-md-10"> <Link className="subhead-decoration" href="/influencer-Marketing"> How to collaborate <br />
                                    <span className="head-sub-head">Explore, Collaborate, Promote attention-grabbing content</span></Link></div>
                                </div>

                                <div className="container row mx-auto pt-2">
                               
                               <div className="col-2 col-md-2 pt-1 pb-1"><span className="material-icons">&#xea1d;</span></div>
                               <div className="col-10 col-md-10"> <Link className="subhead-decoration"href="/find-Creator"> How payment works <br />
                               <span className="head-sub-head">Choose your niche specific content creators</span></Link></div>
                        
                           </div>

                            </ul>
                        </li>
                       


                       


                        <li className="nav-item me-5 ms-2 my-2">
                            <Link className="nav-link g-fonts" href="/blog/first-blog">Blog</Link>
                        </li>


                        <div className="container my-2 ms-md-3">
                            <button className="btn px-1 login-btn-grad btn-g-fonts text-white">Get Started</button>

                        </div>

                        {/* <div className="container my-2">
                            <button className="btn px-5 signup-btn-grad btn-g-fonts">Signup</button>

                        </div> */}


                    </ul>
                </div>
            </div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>

        </nav>


	

    )
}
