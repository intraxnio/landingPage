import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-footer-container pt-5 pb-2">
        <div className="container row mx-auto p-1">
          <div className="container col-md-3 col-12 my-2">
            <div className="div">
                
              <ul>
                <li className="footer-head-text">Useful</li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/terms-conditions">Terms & Conditions</Link></li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/privacy-policy">Privacy Policy</Link></li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/cancellation-policy">Cancellation Policy</Link></li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/refund-policy">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="container col-sm-6 col-6 col-md-3 col-lg-3 my-2">
            <div className="div">
              <ul>
                <li className="footer-head-text">Support</li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/support/contact">Contact Us</Link></li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/support/creators">For Creators</Link></li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/support/brands">For Brands</Link></li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/support/others">Others</Link></li>
              </ul>
            </div>
          </div>
          <div className="container col-sm-6 col-6 col-md-3 col-lg-3 my-2">
            <div className="div">
              <ul>
                <li className="footer-head-text">Company</li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/blog/first-blog">Blog</Link></li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/about">About Us</Link></li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/our-mission">Our Mission</Link></li>
                <li className="footer-content-text"><Link className="footer-subhead-decoration" href="/sitemap.xml">Sitemap</Link></li>
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
                <li className="footer-content-text">
                  help@intraxn.com
                </li>
                <li className="footer-head-text pt-4">
                  Follow us 
                </li>
                <li className="footer-content-text my-1">
                  <Link href="https://www.instagram.com/intraxn.ai/">
                    <img  className="img-fluid rounded me-2" src="/icon-instagram.png" alt="instagram-icon" width={25} height={25} />
                  </Link>
                  <Link href="https://www.facebook.com/intraxn">
                    <img  className="img-fluid rounded me-2" src="/icon-facebook.png" alt="facebook-icon" width={25} height={25} />
                  </Link>
                  <Link href="https://www.youtube.com">
                    <img  className="img-fluid rounded me-2" src="/icon-youtube.png" alt="youtube-icon" width={30} height={30} />
                  </Link>
                  <Link href="https://www.twitter.com">
                    <img  className="img-fluid rounded me-2" src="/icon-twitter.png" alt="twitter-icon" width={25} height={25} />
                  </Link>
                  <Link href="https://www.linkedin.com/company/intraxn-ai/">
                    <img  className="img-fluid rounded me-2" src="/icon-linkedin.png" alt="linkedin-icon" width={25} height={25} />
                  </Link>

                  
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
