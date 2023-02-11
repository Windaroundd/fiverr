import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card } from 'antd';
import { useEffect, useState } from "react";
import React from "react";
import { jobSevice } from './../services/jobService';
const { Meta } = Card;
const buttonTitle =
  "w-50 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded space-x-3 transition delay-75";
export default function TitlePage() {
    const [titleItem, setTitleItem] = useState([])
    const [itemFilter, setItemFilter] = useState()
    const mapContent = () => { 
        return titleItem?.map((item)=>{
            return <>
            <p>{item.tenLoaiCongViec}</p>
            </>
        })
     }

    const FilterItem = (idItem) => { 
        const filteredItem = titleItem.filter((item)=>{
            return item.id == idItem
        })
        setItemFilter(filteredItem)
     }
    useEffect(() => { 
        jobSevice.getJobCategory()
         .then((res) => {
           console.log(res.data.content);
           setTitleItem(res.data.content)
         })
         .catch((err) => {
           console.log(err);
              });
     }, [])
  return (
    <div className="w-full h-screen py-40">
      <div className="show-title space-y-8">
        <div className="container mx-auto title-service  space-y-8">
          <div className="title-content flex flex-col justify-center items-center space-y-5">
            <h1 className="text-xl font-medium">
              Design to make you stand out.
            </h1>
            <button className={buttonTitle}>
              <span>
                <FontAwesomeIcon
                  className="play-icon"
                  icon={faCirclePlay}
                  size="xl"
                />
              </span>
              <span>How Fiverr Works</span>
            </button>
          </div>

          <div className="popular-job-title text-left space-y-5">
            <h1 className="text-2xl text-left font-medium">
              Most popular in Graphics & Design
            </h1>
            <div className="popular-job-content">
              <div className="popular-job-container flex justify-around space-x-5">
                <div className="popular-job-item">
                  <div className="popular-content flex items-center space-x-4">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
                      alt=""
                    />
                    <div className="content-item space-x-3">
                      <span>Minimalist Logo Design</span>
                      <span>
                        <FontAwesomeIcon className='fa-right-icon' icon={faArrowRight} size="md" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="popular-job-item">
                  <div className="popular-content flex items-center space-x-4">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
                      alt=""
                    />
                    <div className="content-item space-x-3">
                      <span>Architecture & Interior Design</span>
                      <span>
                        <FontAwesomeIcon className='fa-right-icon' icon={faArrowRight} size="md" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="popular-job-item">
                  <div className="popular-content flex items-center space-x-4">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png"
                      alt=""
                    />
                    <div className="content-item space-x-3">
                      <span>Image Editting</span>
                      <span>
                        <FontAwesomeIcon className='fa-right-icon' icon={faArrowRight} size="md" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="popular-job-item">
                  <div className="popular-content flex items-center space-x-4">
                    <img
                      src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png"
                      alt=""
                    />
                    <div className="content-item space-x-3">
                      <span>NFT Art</span>
                      <span>
                        <FontAwesomeIcon className='fa-right-icon' icon={faArrowRight} size="md" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="popular-job-item">
                  <div className="popular-content flex items-center space-x-4">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png"
                      alt=""
                    />
                    <div className="content-item space-x-3">
                      <span>T-Shirts & Merchandise
</span>
                      <span>
                        <FontAwesomeIcon className='fa-right-icon' icon={faArrowRight} size="md" />
                      </span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="explore-item">
            <h1 className="text-2xl text-left font-medium">Explore {mapContent()}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
