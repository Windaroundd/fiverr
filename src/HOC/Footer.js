import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFemale } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
export default function Footer() {
  const location = useLocation()
  const [paddingForTitle,setPaddingForTitle] = useState(false)
  useMemo(() => { 
    if(location.pathname === "/title"){
      setPaddingForTitle(true)
    }else{
      setPaddingForTitle(false)
    }
   },[location])
  return (
    <div className={paddingForTitle? "footer-fiver-title py-8": "footer-fiver py-8"}>
      <div className="container mx-auto">
        <div className="footer-content w-full  flex flex-col justify-center items-start sm:justify-between sm:flex-row sm:items-start  ">
          <div className="footer-item lg:mr-5  text-left">
            <h1 className="font-bold py-2">Categories</h1>
            <div
              style={{ color: " #74767e" }}
              className="footer-carousel space-y-2"
            >
              <ul className="space-y-5">
                <li>
                  <a href="">Graphic & Design</a>
                </li>
                <li>
                  <a href="">Digital Marketing</a>
                </li>
                <li>
                  <a href="">Writing & Translation</a>
                </li>
                <li>
                  <a href="">Video & Animation</a>
                </li>
                <li>
                  <a href="">Music & Audio</a>
                </li>
                <li>
                  <a href="">Programming & Tech</a>
                </li>
                <li>
                  <a href="">Data</a>
                </li>
                <li>
                  <a href="">Business</a>
                </li>
                <li>
                  <a href="">Lifestyle</a>
                </li>
                <li>
                  <a href="">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-item  md:px-2  sm:pl-0 xl:space-y-5  text-left">
            <h1 className="font-bold py-2">About</h1>
            <div
              style={{ color: " #74767e" }}
              className="footer-carousel space-y-2"
            >
              <ul className="space-y-5">
                <li>
                  <a href="">Career</a>
                </li>
                <li>
                  <a href="">Press & News</a>
                </li>
                <li>
                  <a href="">Partnerships</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
                <li>
                  <a href="">Intellectual Property Claims</a>
                </li>
                <li>
                  <a href="">Investor Relations</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-item pr-10 md:pr-5 lg:space-y-5 space-y-3 text-left">
            <h1 className="font-bold py-2">Support</h1>
            <div
              style={{ color: " #74767e" }}
              className="footer-carousel space-y-2"
            >
              <ul className="space-y-5">
                <li>
                  <a href="">Help & Support</a>
                </li>
                <li>
                  <a href="">Trust & Safety</a>
                </li>
                <li>
                  <a href="">Selling on Fiverr</a>
                </li>
                <li>
                  <a href="">Buying on Fiverr</a>
                </li>
              </ul>
            </div>
          </div>
          

          <div className="footer-item  lg:space-y-5 space-y-3 text-left">
            <h1 className="font-bold py-2">Community</h1>
            <div
              style={{ color: " #74767e" }}
              className="footer-carousel space-y-2"
            >
              <ul className="space-y-5">
                <li>
                  <a href="">Events</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Forum</a>
                </li>
                <li>
                  <a href="">Community Standards</a>
                </li>
                <li>
                  <a href="">Podcast</a>
                </li>
                <li>
                  <a href="">Affiliates</a>
                </li>
                <li>
                  <a href="">Invite a Friend</a>
                </li>
                <li>
                  <a href="">Become a Seller</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-item  lg:space-y-5 space-y-3 text-left">
            <h1 className="font-bold py-2">More From Fiverr</h1>
            <div
              style={{ color: " #74767e" }}
              className="footer-carousel space-y-2"
            >
              <ul className="space-y-5">
                <li>
                  <a href="">Fiverr Business</a>
                </li>
                <li>
                  <a href="">Fiverr Pro</a>
                </li>
                <li>
                  <a href="">Fiverr Studios</a>
                </li>
                <li>
                  <a href="">Fiverr Logo Market</a>
                </li>
                <li>
                  <a href="">Fiverr Guides</a>
                </li>
                <li>
                  <a href="">Get Inspired</a>
                </li>
                <li>
                  <a href="">Fiverr Select</a>
                </li>
                <li>
                  <a href="">ClearVoice</a>
                  <p className="sub-chapter" href="">
                    Content Marketing
                  </p>
                </li>
                <li>
                  <a href="">Fiverr Workspace</a>
                  <p className="sub-chapter" href="">
                    Invoice Marketing
                  </p>
                </li>
                <li>
                  <a href="">Learn</a>
                  <p className="sub-chapter" href="">
                    Online Courses
                  </p>
                </li>
                <li>
                  <a href="">Working Not Working</a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="footer-item  lg:space-y-5 space-y-3 text-left">
            <h1 className="font-bold py-5">Categories</h1>
            <div
              style={{ color: " #74767e" }}
              className="footer-carousel space-y-2"
            >
              <ul className="space-y-5">
                <li>
                  <a href="">Graphic & Design</a>
                </li>
                <li>
                  <a href="">Digital Marketing</a>
                </li>
                <li>
                  <a href="">Writing & Translation</a>
                </li>
                <li>
                  <a href="">Video & Animation</a>
                </li>
                <li>
                  <a href="">Music & Audio</a>
                </li>
                <li>
                  <a href="">Programming & Tech</a>
                </li>
                <li>
                  <a href="">Data</a>
                </li>
                <li>
                  <a href="">Business</a>
                </li>
                <li>
                  <a href="">Lifestyle</a>
                </li>
                <li>
                  <a href="">Sitemap</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-container flex items-center justify-between  py-8">
            <div className="footer-left flex space-x-3 items-center">
              <span class="logo_footer">
                <svg
                  width="91"
                  height="27"
                  viewBox="0 0 91 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#7A7D85">
                    <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
                  </g>
                  <g fill="#7A7D85">
                    <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
                  </g>
                </svg>
              </span>
              <span className="copy-write truncate">
                © Fiverr International Ltd. 2022
              </span>
            </div>
            <div style={{flexBasis:'60%'}} className="footer-right justify-evenly flex px-10 items-center footer-text">
              <div style={{flexBasis:'40%'}} className="icon-social-media flex space-x-4 justify-evenly">
                <span>
                  <FontAwesomeIcon className="icon-footer" icon={faTwitter} size="xl" />
                </span>
                <span>
                  <FontAwesomeIcon className="icon-footer" icon={faFacebook} size="xl" />
                </span>
                <span>
                  <FontAwesomeIcon className="icon-footer" icon={faLinkedin} size="xl" />
                </span>
                <span>
                  <FontAwesomeIcon className="icon-footer" icon={faPinterest} size="xl" />
                </span>
                <span>
                  <FontAwesomeIcon className="icon-footer" icon={faInstagram} size="xl" />
                </span>
              </div>
              <button   className="icon-language space-x-2">
              <FontAwesomeIcon className='icon-footer' icon={faGlobe}/>
                    <span>English</span>
              </button>
       
              <button  className="icon-currency">
               US$ USD
              </button>
              <button>
              
                    <FontAwesomeIcon
                    className="icon-footer"
                    icon={faFemale}
                    size='xl'/>
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
