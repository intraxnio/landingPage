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
                <li className="footer-content-text"><Link href="/terms-conditions"><a className="footer-subhead-decoration">Terms & Conditions</a></Link></li>
                <li className="footer-content-text"><Link href="/privacy-policy"><a className="footer-subhead-decoration">Privacy Policy</a></Link></li>
                <li className="footer-content-text"><Link href="/cancellation-policy"><a className="footer-subhead-decoration">Cancellation Policy</a></Link></li>
                <li className="footer-content-text"><Link href="/refund-policy"><a className="footer-subhead-decoration">Refund Policy</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="container col-sm-6 col-6 col-md-3 col-lg-3 my-2">
            <div className="div">
              <ul>
                <li className="footer-head-text">Support</li>
                <li className="footer-content-text"><Link href="/support/contact"><a className="footer-subhead-decoration">Contact Us</a></Link></li>
                <li className="footer-content-text"><Link href="/support/creators"><a className="footer-subhead-decoration">For Creators</a></Link></li>
                <li className="footer-content-text"><Link href="/support/brands"><a className="footer-subhead-decoration">For Brands</a></Link></li>
                <li className="footer-content-text"><Link href="/support/others"><a className="footer-subhead-decoration">Others</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="container col-sm-6 col-6 col-md-3 col-lg-3 my-2">
            <div className="div">
              <ul>
                <li className="footer-head-text">Company</li>
                <li className="footer-content-text"><Link href="/blog/first-blog"><a className="footer-subhead-decoration">Blog</a></Link></li>
                <li className="footer-content-text"><Link href="/about"><a className="footer-subhead-decoration">About Us</a></Link></li>
                <li className="footer-content-text"><Link href="/our-mission"><a className="footer-subhead-decoration">Our Mission</a></Link></li>
                <li className="footer-content-text"><Link href="/sitemap.xml"><a className="footer-subhead-decoration">Sitemap</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="container col-sm-12 col-12 col-md-3 col-lg-3 my-2">
            <div className="div">
              <ul>
                {/* <li className="footer-head-text">Registered HQ</li>
                <li className="footer-content-text">
                  Plot no-210, Century Hills, Hyderabad Telangana - 500018
                </li>
                <li className="footer-content-text">
                  help@intraxn.com
                </li> */}

                <li className="footer-head-text">Compare</li>
                <li className="footer-content-text">
                 Grynow Alternative
                </li>
                <li className="footer-content-text">
                 Plixxo Alternative
                </li>
                <li className="footer-content-text">
                 Grin Alternative
                </li>
                <li className="footer-content-text">
                 Influencer Alternative
                </li>
                <li className="footer-content-text">
                 Winkl Alternative
                </li>
                <li className="footer-content-text">
                 Qoruz Alternative
                </li>
                <li className="footer-content-text">
                 CreatorIQ Alternative
                </li>
                <li className="footer-content-text">
                 PulpKey Alternative
                </li>

                <li className="footer-head-text pt-4">
                  Follow us 
                </li>
                <li className="footer-content-text my-1">
                  <Link href="https://www.instagram.com/intraxn.ai/"><a><img  className="img-fluid rounded me-2" src="/icon-instagram.png" alt="instagram-icon" width={25} height={25} /></a></Link>
                  <Link href="https://www.facebook.com/intraxn"><a><img  className="img-fluid rounded me-2" src="/icon-facebook.png" alt="facebook-icon" width={25} height={25} /></a></Link>
                  <Link href="https://www.youtube.com"><a><img  className="img-fluid rounded me-2" src="/icon-youtube.png" alt="youtube-icon" width={30} height={30} /></a></Link>
                  <Link href="https://www.twitter.com"><a><img  className="img-fluid rounded me-2" src="/icon-twitter.png" alt="twitter-icon" width={25} height={25} /></a></Link>
                  <Link href="https://www.linkedin.com/company/intraxn-ai/"><a><img  className="img-fluid rounded me-2" src="/icon-linkedin.png" alt="linkedin-icon" width={25} height={25} /></a></Link>

                  
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
