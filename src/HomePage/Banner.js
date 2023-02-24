import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, EffectFade, Pagination, Transition } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import { jobSevice } from "../services/jobService";
import { noAuto } from "@fortawesome/fontawesome-svg-core";
import { useDispatch } from 'react-redux';
import { recievedName } from "../redux-toolkit/searchItem";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom';
const buttonBanner = "ml-2 bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black  px-2 border border-white hover:border-transparent "

export default function Banner() {
  // const history = useHistory()
  const dispatch = useDispatch()
  const [input,setInput]=useState()
  const formSubmitted = useSelector(state => state.searchItem.formSubmitted);
  const navigate = useNavigate()
   const handleChange = (event) => {
    // 👇 Get input value from "event"
    
    setInput(event.target.value);
  };
  const handleClick =  (event) => { 
     event.preventDefault() 
        dispatch(recievedName(input))
    // window.location.href('/job')
    // history.push('/job')

   }

   useEffect(() => { 
    if(formSubmitted){
      return navigate('/job')
    }
    },[formSubmitted])

  console.log('input: ', input);
  return (
    <div>
      <Swiper
        EffectFade={true}
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        modules={[Autoplay,  EffectFade]}
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
        <div className="search container">
          <div className="content ">
            <div className="searchLeft">
              <h1>
                Find the perfect <i>freelance</i> services for your business
              </h1>
              
  <form onSubmit={handleClick} action="" role="search" className="flex form-carousel">
                <input
                  id='search' value={input} className="form-control rounded-l-lg"
                  type="search"
                  onChange={handleChange} name="input"
                  placeholder='Try "building mobile app&quote;'
                />
                {/* <NavLink to='/job'> */}
    <button type="submit"  className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-r-lg">
                  
      
        Search
                
      

    </button>
              {/* </NavLink> */}
  </form>
             
  
  <div className="flex popular">
                <span>Popular:</span>
                <div
                  style={{
                    borderRadius: "40px",
                    transition: "0.5s",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  className={buttonBanner}
                >
                  Website Design
                </div>
                <div
                  style={{
                    borderRadius: "40px",
                    transition: "0.5s",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  className={buttonBanner}
                >
                  WordPress
                </div>
                <div
                  style={{
                    borderRadius: "40px",
                    transition: "0.5s",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  className={buttonBanner}
                >
                  Logo Design
                </div>
                <div
                  style={{
                    borderRadius: "40px",
                    transition: "0.5s",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  className={buttonBanner}
                >
                  Video Edditing
                </div>
              </div>
            </div>
            <div className="searchRight"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
