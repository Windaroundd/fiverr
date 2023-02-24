import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card } from "antd";
import { useEffect, useState} from "react";
import React from "react";
import { jobSevice } from "./../services/jobService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { recieveId } from "../redux-toolkit/headerItem";
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;
const buttonTitle =
  "w-50 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded space-x-3 transition delay-75";
export default function TitlePage() {
  const filteredItem = useSelector((state) => {
    return state.itemTitleSlider.item;
  });
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const dispatchID = (id) => { 
    dispatch(recieveId(id))
    navigation('/job')
   }
  
  console.log("filteredItem: ", filteredItem);
  const [titleItem, setTitleItem] = useState([]);
  const [itemFilter, setItemFilter] = useState();
  
  const mapTitle = () => { 
    return itemFilter?.map((item)=>{
      return <span>{item.tenLoaiCongViec}</span>
    })
   }
  const mapContent = () => {
   
    return itemFilter?.map((item) => {
      return (
        <>
          <span>{item.tenLoaiCongViec}</span>
          <div className="flex space-x-5 py-5">{mapItemDetail(item?.dsNhomChiTietLoai)}</div>
        </>
      );
    });
  };
  const mapDescription = (item) => { 
    return item?.map((des)=>{
      return <div className="py-1">
      <button onClick={()=>{dispatchID(des.id)}} className="px-2 py-2 button-titlepage block rounded text-left">{des.tenChiTiet}</button>
      </div>
    })
   }
  const mapItemDetail = (item) => {
    return item.map((i) => {
      return (
        <Card
          className=""
          hoverable
          style={{ width: 350 }}
          cover={
            <img
              className="mb-5"
              alt="example"
              src={i.hinhAnh}
            />
          }
        >
          <Meta className="text-xl px-5 py-3"  title={i.tenNhom} description={mapDescription(i?.dsChiTietLoai)} />
        </Card>
      );
    });
  };

  useEffect(() => {
    setItemFilter(filteredItem);
    // setTitleItem(itemFilter[0].tenLoaiCongViec)
  }, [filteredItem]);

  // console.log('itemfilter',itemFilter.tenLoaiCongViec);
  return (
    <div className="w-full h-screen ">
      <div className="show-title  space-y-20">
        <div className="container mx-auto title-service  space-y-16">
          <div className="title-content  pt-32 flex flex-col justify-center items-center space-y-5">
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
              Most popular in {mapTitle()}
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
                        <FontAwesomeIcon
                          className="fa-right-icon"
                          icon={faArrowRight}
                          size="md"
                        />
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
                        <FontAwesomeIcon
                          className="fa-right-icon"
                          icon={faArrowRight}
                          size="md"
                        />
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
                        <FontAwesomeIcon
                          className="fa-right-icon"
                          icon={faArrowRight}
                          size="md"
                        />
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
                        <FontAwesomeIcon
                          className="fa-right-icon"
                          icon={faArrowRight}
                          size="md"
                        />
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
                      <span>T-Shirts & Merchandise</span>
                      <span>
                        <FontAwesomeIcon
                          className="fa-right-icon"
                          icon={faArrowRight}
                          size="md"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="explore-item">
            <h1 className="text-2xl text-left font-medium">
              Explore {mapContent()}
            </h1>
          </div>

          <div className="related-service ">
            <div className="container lg:mt-5 lg:mb-5 md:mt-4 md:mb-4 sm:mt-2 sm:mb-2 ">
            <h1 className="lg:mb-5 md:mb-4 sm:mb-2 service-related-title">Services Related to {mapTitle()} </h1>
            <div className="service-tags">
                <span>Minimalist logo design</span>
                <span>Signature logo design</span>
                <span>Mascot logo design</span>
                <span>3d logo design</span>
                <span>Hand drawn logo design</span>
                <span>Vintage logo design</span>
                <span>Remove background</span>
                <span>Photo restoration</span>
                <span>Photo retouching</span>
                <span>Image resize</span>
                <span>Product label design</span>
                <span>Custom twitch overlay</span>
                <span>Custom twitch emotes</span>
                <span>Gaming logo</span>
                <span>Children book illustration</span>
            </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
