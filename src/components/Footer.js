import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container-fluid rounded bg-footer-container pt-5 pb-2">
        <div className="container row mx-auto p-1">
          <div className="container col-md-3 col-12 my-2">
            <div className="div">
                
              <ul>
                <li className="footer-head-text">Useful</li>
                <li className="footer-content-text">Terms & Conditions</li>
                <li className="footer-content-text">Privacy Policy</li>
                <li className="footer-content-text">Cancellation Policy</li>
                <li className="footer-content-text">Refund Policy</li>
              </ul>
            </div>
          </div>
          <div className="container col-sm-6 col-6 col-md-3 col-lg-3 my-2">
            <div className="div">
              <ul>
                <li className="footer-head-text">Support</li>
                <li className="footer-content-text">Contact Us</li>
                <li className="footer-content-text">For Creators</li>
                <li className="footer-content-text">For Brands</li>
                <li className="footer-content-text">Others</li>
              </ul>
            </div>
          </div>
          <div className="container col-sm-6 col-6 col-md-3 col-lg-3 my-2">
            <div className="div">
              <ul>
                <li className="footer-head-text">Company</li>
                <li className="footer-content-text">Blog</li>
                <li className="footer-content-text">About Us</li>
                <li className="footer-content-text">Our Mission</li>
                <li className="footer-content-text">Sitemap</li>
              </ul>
            </div>
          </div>
          <div className="container col-sm-12 col-12 col-md-3 col-lg-3 my-2">
            <div className="div">
              <ul>
                <li className="footer-head-text">Registered HQ</li>
                <li className="footer-content-text">
                  Plot no-210, Century Hills, Hyderabad Telangana - 500018
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container text-center my-3">
          <span className="fw-normal">Copyright &copy;2023 intraxn </span>
        </div>
      </div>
    </>
  );
}
