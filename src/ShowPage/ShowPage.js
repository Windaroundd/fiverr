import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Switch } from 'antd';
import { useSelector } from "react-redux";
import { jobSevice } from './../services/jobService';
import { useEffect } from "react";
import { useState } from "react";
const buttonStyle = 'bg-transparent transition-all hover:bg-green-500  text-black-700 py-2 px-2 font-semibold hover:text-white border border-black hover:border-transparent rounded service-btn'
export default function ShowPage() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const [itemDetail,setItemDetail] = useState()
  const idItem = useSelector((state) => { 
    return  state.headerItem.id
   })

   useEffect(() => { 
   jobSevice.getJobDetail((idItem))
   .then((res) => {
       console.log(res.data.content);
       setItemDetail(res.data.content)
     })
     .catch((err) => {
       console.log(err);
          });
    },[idItem])
  return (
    <div style={{zIndex: '3000'}} className="w-full  py-40">
      <div className="show-banner space-y-8">
        <div className="container mx-auto show-banner-service space-y-3">
          <h1 className="font-bold text-3xl text-left">Result for "html"</h1>
          <div className="service flex justify-between">
          <div style={{marginTop:'10px'}} className="left-show-banner flex space-x-4  justify-evenly">
          <button className={buttonStyle}>
          <span className="pr-3">Category</span>  
          <FontAwesomeIcon
          icon={faChevronDown}
          size='1x'
          hover="text-green-500"
          className="icon"
          />
          </button> 
          <button className={buttonStyle}>
          <span className="pr-3">Service Options</span>  
          <FontAwesomeIcon
          icon={faChevronDown}
          size='1x'
          hover="text-green-500"
          className="icon"
          />
          </button> 

          <button className={buttonStyle}>
          <span className="pr-3">Seller Details</span>  
          <FontAwesomeIcon
          icon={faChevronDown}
          size='1x'
          hover="text-green-500"
          className="icon"
          />
          </button> 

          <button className={buttonStyle}>
          <span className="pr-3">Budget</span>  
          <FontAwesomeIcon
          icon={faChevronDown}
          size='1x'
          hover="text-green-500"
          className="icon"
          />
          </button> 

          <button className={buttonStyle}>
          <span className="pr-3">Delivery Time</span>  
          <FontAwesomeIcon
          icon={faChevronDown}
          size='1x'
          hover="text-green-500"
          className="icon"
          />
          </button> 
          </div> 
          <div style={{marginTop:'10px'}} className="right-show-banner flex justify-end">
            <div className="right-service py-2 px-3   ">
            <Switch defaultChecked onChange={onChange} />
              <span className="ml-2">Pro Services</span>
            </div>
            <div className="right-service py-2 px-4   ">
            <Switch defaultChecked onChange={onChange} />
              <span className="ml-2">Location Sellers</span>
            </div>
            <div className="right-service py-2 px-4   ">
            <Switch defaultChecked onChange={onChange} />
              <span className="ml-2">Online Sellers</span>
            </div>
            </div> 
          </div>
        </div>
          <div className="show-banner-service container mx-auto space-x-4">
            <div className="service-item">
              <div className="service-item-content">
                <img src="" alt="" />
                <div className="avatar-content flex justify-between">
                  <img src="" alt="" />
                  <div className="name">
                    <h5>name</h5>
                    <h6>level</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  );
}
