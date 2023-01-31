import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import { jobSevice } from './../services/jobService';
import { noAuto } from "@fortawesome/fontawesome-svg-core";

export default function Banner() {



//  let displayJobCategory = () => { 
//   return jobCategory.map((item)=>{
//     return  <div className="bg-transparent transition-all delay-150 hover:bg-white rounded-full text-white-700 font-semibold text-sm hover:text-black  px-4 border  border-white hover:border-transparent mr-5">
//       <button>{item.tenLoaiCongViec}</button>
//     </div>
//   }) 
//   }
  return (
    <div>
      <Swiper
        transition
       effect='fade'
        
        autoplay={{
          
          disableOnInteraction: false,
         
          
        }}
        modules={[Pagination,Autoplay,EffectFade]}
        className="mySwiper"
        pagination={{ clickable: true }}
        // modules={[Pagination]}
      >
        <SwiperSlide>
          <img
           src="http://demo5.cybersoft.edu.vn/img/1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://demo5.cybersoft.edu.vn/img/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://demo5.cybersoft.edu.vn/img/3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://demo5.cybersoft.edu.vn/img/4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://demo5.cybersoft.edu.vn/img/5.png" alt="" />
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
    <div style={{borderRadius:'40px', transition:'0.5s', cursor:'pointer',fontSize:'14px'}} className="ml-2 bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-1 px-2 border border-white hover:border-transparent ">
      Website Design
    </div>
    <div style={{borderRadius:'40px', transition:'0.5s', cursor:'pointer',fontSize:'14px'}} className="ml-2 bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-1 px-2 border border-white hover:border-transparent ">
      WordPress
    </div>
    <div style={{borderRadius:'40px', transition:'0.5s', cursor:'pointer',fontSize:'14px'}} className="ml-2 bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-1 px-2 border border-white hover:border-transparent ">
      Logo Design
    </div>
    <div style={{borderRadius:'40px', transition:'0.5s', cursor:'pointer',fontSize:'14px'}} className="ml-2 bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-1 px-2 border border-white hover:border-transparent ">
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
