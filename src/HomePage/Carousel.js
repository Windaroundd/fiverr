import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import CarouselModal from "./CarouselModal";
export default function Carousel() {
    const[srcVideo,setSrcVideo]= useState("")
    const[carouselModal, setCarouselModal]=useState(false)
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          fontSize: "50px",
          opacity: 0.75,
          background: "transparent",
        }}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          color: "white",
          fontSize: "50px",
          zIndex: "1",
          opacity: 0.75,
          
        }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const handleOnClose= () => { 
    return setCarouselModal(false)
   }
  const handleOnClick=(number)=> {
    console.log("number",number);
    const src = ['https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl','https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi','https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun','https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw']
    // let index = src.findIndex((i)=>{
    //   return i = number
    // })
 
    setSrcVideo(src[number])
    return setCarouselModal(true)
  }
 
  return (
    <div className="container mx-auto mb-20">
      <Slider {...settings}>
        <div className="carousel-container">
          <div className="carousel-img">
            <button onClick={() => { handleOnClick(0) }}  className="carousel-button">
              <img
                className="w-100 h-100"
                src="http://demo5.cybersoft.edu.vn/img/testimonial2.png"
                alt="not found"
              />
            </button>
          </div>
          <div className="carousel-content-container ml-5 space-y-5 w-1/2">
            <div className="carousel-content">
            <h5
              style={{
                color: "#74767e",
                fontWeight: "400",
                fontSize: "1.25rem",
              }}
              className="text-left"
            >
              Caitlin Tormey, Chief Commercial <br></br> Officer
            </h5>
            <div className="img-content">
              <span>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                  alt=""
                />
              </span>
            </div>
            </div>
           <div className="content-testimonial">
            <p>"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."</p>
           </div>
            
          </div>
          
        </div>

        <div className="carousel-container">
          <div className="carousel-img ">
            <button onClick={() => { handleOnClick(1) }} className="carousel-button">
              <img
                className="w-100 h-100"
                src="http://demo5.cybersoft.edu.vn/img/testimonial3.png"
                alt="not found"
              />
            </button>
          </div>
          <div className="carousel-content-container ml-5 space-y-5 w-1/2">
            <div className="carousel-content">
            <h5
              style={{
                color: "#74767e",
                fontWeight: "400",
                fontSize: "1.25rem",
              }}
              className="text-left"
            >
             Brighid Gannon (DNP, PMHNP-BC),<br></br> Co-Founder
            </h5>
            <div className="img-content">
              <span>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                  alt=""
                />
              </span>
            </div>
            </div>
           <div className="content-testimonial">
            <p>"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."</p>
           </div>
            
          </div>
          
        </div>

        <div className="carousel-container">
          <div className="carousel-img ">
            <button onClick={() => { handleOnClick(2) }} className="carousel-button">
              <img
                className="w-100 h-100"
                src="http://demo5.cybersoft.edu.vn/img/testimonial4.png"
                alt="not found"
              />
            </button>
          </div>
          <div className="carousel-content-container ml-5 space-y-5 w-1/2">
            <div className="carousel-content">
            <h5
              style={{
                color: "#74767e",
                fontWeight: "400",
                fontSize: "1.25rem",
              }}
              className="text-left"
            >
             Tim and Dan Joo, <br></br>Co-Founders
            </h5>
            <div className="img-content">
              <span>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                  alt=""
                />
              </span>
            </div>
            </div>
           <div className="content-testimonial">
            <p>"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."</p>
           </div>
            
          </div>
          
        </div>
        
        <div className="carousel-container">
          <div className="carousel-img ">
            <button onClick={()=>{handleOnClick(3)}} className="carousel-button">
              <img
                className="w-100 h-100"
                src="http://demo5.cybersoft.edu.vn/img/testimonial1.png"
                alt="not found"
              />
            </button>
          </div>
          <div className="carousel-content-container ml-5 space-y-5 w-1/2">
            <div className="carousel-content">
            <h5
              style={{
                color: "#74767e",
                fontWeight: "400",
                fontSize: "1.25rem",
              }}
              className="text-left"
            >
              Kay Kim, Co-Founder
            </h5>
            <div className="img-content">
              <span>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                  alt=""
                />
              </span>
            </div>
            </div>
           <div className="content-testimonial">
            <p>"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."</p>
           </div>
            
          </div>
          
        </div>
       
      </Slider>
      <CarouselModal srcVideo={srcVideo} visible={carouselModal} handleOnClose={handleOnClose}/>
    </div>
  );
}
