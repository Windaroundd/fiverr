import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
export default function Banner() {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
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
      <section className="slider-content container">
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
    <div className="bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-1 px-2 border border-white hover:border-transparent rounded">
      Graphic Design(Put the API here)
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
