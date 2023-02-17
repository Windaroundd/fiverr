import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
// import Swiper from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {  Autoplay,EffectFade, Pagination, Transition } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import { jobSevice } from './../services/jobService';
import { noAuto } from "@fortawesome/fontawesome-svg-core";
const buttonBanner = "ml-2 bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black  px-2 border border-white hover:border-transparent "
export default function Banner() {

  return (
    <div>
      <Swiper
        EffectFade={true}
        loop={true}
        slidesPerView={1}
        autoplay={{delay:5000}}
        modules={[Autoplay,EffectFade]}
        className="mySwiper"
        
        // modules={[Pagination]}
      >
        <SwiperSlide>
          <img
           className="banner-img" 
           src="http://demo5.cybersoft.edu.vn/img/1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner-img" src="http://demo5.cybersoft.edu.vn/img/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner-img" src="http://demo5.cybersoft.edu.vn/img/3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner-img" src="http://demo5.cybersoft.edu.vn/img/4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner-img" src="http://demo5.cybersoft.edu.vn/img/5.png" alt="" />
        </SwiperSlide>
      </Swiper>
      <section className="slider-content mx-auto container">
        <div className="search">
          <div className="content">
            <div className="searchLeft">
              <h1>Find the perfect <i>freelance</i> services for your business</h1>
  <form action="" role="search" className="flex form-carousel">
    <input className="form-control rounded-l-lg" type="search" name="searchInputCarousel" placeholder="Try &quot;building mobile app&quote;" />
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-lg">Search</button>
  </form>
  <div className="flex popular">
    <span>Popular:</span>
    <div style={{borderRadius:'40px', transition:'0.5s', cursor:'pointer',fontSize:'14px'}} className={buttonBanner}>
      Website Design
    </div>
    <div style={{borderRadius:'40px', transition:'0.5s', cursor:'pointer',fontSize:'14px'}} className={buttonBanner}>
      WordPress
    </div>
    <div style={{borderRadius:'40px', transition:'0.5s', cursor:'pointer',fontSize:'14px'}} className={buttonBanner}>
      Logo Design
    </div>
    <div style={{borderRadius:'40px', transition:'0.5s', cursor:'pointer',fontSize:'14px'}} className={buttonBanner}>
      Video Edditing
    </div>
  </div>

            </div>
            <div className="searchRight">
        
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
