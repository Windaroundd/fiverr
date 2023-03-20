import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function SliderItem() {
  
  let settings = {
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=" mb-20 ">
    
      <div className="container mx-auto">
      <h1 className="text-left d-block mx-auto pl-11 pb-7  text-2xl lg:text-4xl">Popular professional services</h1>
        <div className="slider-package">
        <Slider className="space-x-5" {...settings}>
          <div className="itemSlider">
           
            <LazyLoadImage
            style={{width:'100%'}}
            className="object-cover"
            effect="blur"
            src="http://demo5.cybersoft.edu.vn/img/crs1.png"
          />
          </div>
          <div className="itemSlider">
          <LazyLoadImage
            style={{width:'100%'}}
            className="object-cover"
            effect="blur"
            src="http://demo5.cybersoft.edu.vn/img/crs2.png"
          />
          </div>
          <div style={{margin: '0 10px !important'}} className="">
          <div className="itemSlider">
          <LazyLoadImage
            style={{width:'100%'}}
            className="object-cover"
            effect="blur"
            src="http://demo5.cybersoft.edu.vn/img/crs3.png"
          />
          </div>
          </div>
          
          <div className="itemSlider">
          <LazyLoadImage
            style={{width:'100%'}}
            className="object-cover"
            effect="blur"
            src="http://demo5.cybersoft.edu.vn/img/crs4.png"
          />
          </div>
          <div className="itemSlider">
          <LazyLoadImage
            style={{width:'100%'}}
            className="object-cover"
            effect="blur"
            src="http://demo5.cybersoft.edu.vn/img/crs5.png"
          />
          </div>
          <div className="itemSlider">
          <LazyLoadImage
            style={{width:'100%'}}
            className="object-cover"
            effect="blur"
            src="http://demo5.cybersoft.edu.vn/img/crs6.png"
          />
          </div>
          <div className="itemSlider">
          <LazyLoadImage
            style={{width:'100%'}}
            className="object-cover"
            effect="blur"
            src="http://demo5.cybersoft.edu.vn/img/crs7.png"
          />
          </div>
          <div className="itemSlider">
          <LazyLoadImage
            style={{width:'100%'}}
            className="object-cover"
            effect="blur"
            src="http://demo5.cybersoft.edu.vn/img/crs8.png"
          />
          </div>
          <div className="itemSlider">
          <LazyLoadImage
            style={{width:'100%'}}
            className="object-cover"
            effect="blur"
            src="http://demo5.cybersoft.edu.vn/img/crs9.png"
          />
          </div>
          <div className="itemSlider">
          <LazyLoadImage
            style={{width:'100%'}}
            className="object-cover"
            effect="blur"
            src="http://demo5.cybersoft.edu.vn/img/crs10.png"
          />
          </div>
        </Slider>
        </div>
        
      </div>
    </div>
  );
}
