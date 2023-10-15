import React from "react";
import Link from "next/link";
import Image from "next/image";
import instagram from "../../public/icon-instagram.png"
import facebook from "../../public/icon-facebook.png"
import youtube from "../../public/icon-youtube.png"
import twitter from "../../public/icon-twitter.png"
import linkedin from "../../public/icon-linkedin.png"

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
                <li className="footer-content-text"><Link href="/cancellation-policy"><a className="footer-subhead-decoration">Cancellation & Refund</a></Link></li>
                <li className="footer-content-text"><Link href="/shipping-policy"><a className="footer-subhead-decoration">Shipping Policy</a></Link></li>
              </ul>
            </div>
          </div>
          {/* <div className="container col-sm-6 col-6 col-md-3 col-lg-3 my-2">
            <div className="div">
              <ul>
                <li className="footer-head-text">Support</li>
                <li className="footer-content-text"><Link href="/support/contact"><a className="footer-subhead-decoration">Contact Us</a></Link></li>
                <li className="footer-content-text"><Link href="/sitemap.xml"><a className="footer-subhead-decoration">Sitemap</a></Link></li>

                <li className="footer-content-text"><Link href="/support/creators"><a className="footer-subhead-decoration">For Creators</a></Link></li>
                <li className="footer-content-text"><Link href="/support/brands"><a className="footer-subhead-decoration">For Brands</a></Link></li>
                <li className="footer-content-text"><Link href="/support/others"><a className="footer-subhead-decoration">Others</a></Link></li>

              </ul>
            </div>
          </div> */}
          <div className="container col-sm-6 col-6 col-md-3 col-lg-3 my-2">
            <div className="div">
              <ul>
                <li className="footer-head-text">Company</li>
                {/* <li className="footer-content-text"><Link href="/blog/first-blog"><a className="footer-subhead-decoration">Blog</a></Link></li>
                <li className="footer-content-text"><Link href="/about"><a className="footer-subhead-decoration">About Us</a></Link></li>
                <li className="footer-content-text"><Link href="/our-mission"><a className="footer-subhead-decoration">Our Mission</a></Link></li>
                <li className="footer-content-text"><Link href="/sitemap.xml"><a className="footer-subhead-decoration">Sitemap</a></Link></li> */}


                <li className="footer-content-text"><Link href="/support/contact"><a className="footer-subhead-decoration">Contact Us</a></Link></li>
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
                  <Link href="https://www.instagram.com/broadreach.in/"><a><Image  className="img-fluid rounded icon-image" src={instagram} alt="instagram-icon" width={50} height={25} /></a></Link>
                  <Link href="https://www.facebook.com/broadreach.in"><a><Image  className="img-fluid rounded icon-image" src={facebook} alt="facebook-icon" width={50} height={25} /></a></Link>
                  {/* <Link href="https://www.youtube.com"><a><Image  className="img-fluid rounded icon-image mt-1" src={youtube} alt="youtube-icon" width={55} height={35} /></a></Link>
                  <Link href="https://www.twitter.com"><a><Image  className="img-fluid rounded icon-image" src={twitter} alt="twitter-icon" width={50} height={25} /></a></Link> */}
                  <Link href="https://www.linkedin.com/company/broadreachin/"><a><Image  className="img-fluid rounded icon-image" src={linkedin} alt="linkedin-icon" width={50} height={25} /></a></Link>

                  
                </li>
              </ul>
            </div>
          </div>
        </div>




        <div className="container text-center my-3">
          <span className="fw-normal">Copyright &copy;Rootcares Essentials Private Limited </span>
        </div>
      </div>
    </>
  );
}
