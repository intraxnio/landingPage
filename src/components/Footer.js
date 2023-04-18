import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="container rounded bg-footer-container pt-5 pb-2 mt-5">

                <div className="container row mx-auto p-1">
                    <div className="container col-md-3 col-12 my-2">
                        <div className="div">
                            <ul>
                                <li className="list-unstyled text-start footer-head-text">Useful</li>
                                <li className="list-unstyled">Terms & Conditions</li>
                                <li className="list-unstyled">Privacy Policy</li>
                                <li className="list-unstyled">Cancellation Policy</li>
                                <li className="list-unstyled">Refund Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container col-sm-6 col-6 col-md-3 col-lg-3 my-2">
                        <div className="div">
                            <ul>
                                <li className="list-unstyled text-start footer-head-text">Support</li>
                                <li className="list-unstyled">Contact Us</li>
                                <li className="list-unstyled">For Creators</li>
                                <li className="list-unstyled">For Brands</li>
                                <li className="list-unstyled">Others</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container col-sm-6 col-6 col-md-3 col-lg-3 my-2">
                        <div className="div">
                            <ul>
                                <li className="list-unstyled text-start footer-head-text">Company</li>
                                <li className="list-unstyled">Blog</li>
                                <li className="list-unstyled">About Us</li>
                                <li className="list-unstyled">Our Mission</li>
                                <li className="list-unstyled">Sitemap</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container col-sm-12 col-12 col-md-3 col-lg-3 my-2">
                        <div className="div">
                            <ul>
                                <li className="list-unstyled text-start footer-head-text">Registered HQ</li>
                                <li className="list-unstyled">Plot no-210, Century Hills, Hyderabad
                                    Telangana - 500018</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="container text-center my-3">
                    <span className="fw-normal" >Copyright &copy;2023 intraxn </span>
                </div>



            </div>
        </>
    )
}
