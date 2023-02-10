import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function SliderItem() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick}
    style={{...style,fontSize:'50px', opacity: .75,background:'transparent', }}
    />
    
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background:'transparent',
          color: "white",
          fontSize: "50px",
          zIndex: "1",
          opacity: .75,
        }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container mx-auto ">
    
      <div className="container">
      <h1 className="text-left d-block mx-auto pl-11 pb-7 text-4xl">Popular professional services</h1>
        <div className="slider-package">
        <Slider className="mx-auto" {...settings}>
          <div className="itemSlider">
            <img style={{width:'100%'}} className="object-cover" src='http://demo5.cybersoft.edu.vn/img/crs1.png' alt="not found" />
          </div>
          <div className="itemSlider">
          <img style={{width:'100%'}} className="object-cover" src='http://demo5.cybersoft.edu.vn/img/crs2.png' alt="not found" />
          </div>
          <div style={{margin: '0 10px !important'}} className="">
          <div className="itemSlider">
          <img style={{width:'100%'}} className="object-cover" src='http://demo5.cybersoft.edu.vn/img/crs3.png' alt="not found" />
          </div>
          </div>
          
          <div className="itemSlider">
          <img style={{width:'100%'}} className="object-cover" src='http://demo5.cybersoft.edu.vn/img/crs4.png' alt="not found" />
          </div>
          <div className="itemSlider">
          <img style={{width:'100%'}} className="object-cover" src='http://demo5.cybersoft.edu.vn/img/crs5.png' alt="not found" />
          </div>
          <div className="itemSlider">
          <img style={{width:'100%'}} className="object-cover" src='http://demo5.cybersoft.edu.vn/img/crs6.png' alt="not found" />
          </div>
          <div className="itemSlider">
          <img style={{width:'100%'}} className="object-cover" src='http://demo5.cybersoft.edu.vn/img/crs7.png' alt="not found" />
          </div>
          <div className="itemSlider">
          <img style={{width:'100%'}} className="object-cover" src='http://demo5.cybersoft.edu.vn/img/crs8.png' alt="not found" />
          </div>
          <div className="itemSlider">
          <img style={{width:'100%'}} className="object-cover" src='http://demo5.cybersoft.edu.vn/img/crs9.png' alt="not found" />
          </div>
          <div className="itemSlider">
          <img style={{width:'100%'}} className="object-cover" src='http://demo5.cybersoft.edu.vn/img/crs10.png' alt="not found" />
          </div>
        </Slider>
        </div>
        
      </div>
    </div>
  );
}
