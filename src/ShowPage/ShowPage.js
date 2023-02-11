import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "antd";
import { useSelector } from "react-redux";
import { jobSevice } from "./../services/jobService";
import { useEffect } from "react";
import { useState } from "react";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const buttonStyle =
  "bg-transparent transition-all hover:bg-green-500  text-black-700 py-2 px-2 font-semibold hover:text-white border border-black hover:border-transparent rounded service-btn";
const { Meta } = Card;
export default function ShowPage() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const [itemDetail, setItemDetail] = useState([]);
  // this will cause too many re-render problems if have more than 1 local state and setState inside mapping
  const [content, setContent] = useState({});
  const idItem = useSelector((state) => {
    return state.headerItem.id;
  });
  // const mapDetailContent= (item) => {
  //      item?.map((job)=>{
  //         return(
  //           <p>{job?.moTa}</p>

  //         )
  //         })
  //        }
  const createStar = (starReview) => {
    switch (starReview) {
      case 1:
        return <FontAwesomeIcon className="star-icon" icon={faStar} />;

      case 2:
        return (
          <>
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
          </>
        );
      case 3:
        return (
          <>
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
          </>
        );
      case 4:
        return (
          <>
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
          </>
        );
        break;
      case 5:
        return (
          <>
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <FontAwesomeIcon className="star-icon" icon={faStar} />
          </>
        );
    }
  };
  const mapContent = (item) => {
    return item?.map((i) => {
      return (
        <Card
          className=""
          style={{ width: 300 }}
          cover={<img alt="example" src={i.congViec.hinhAnh} />}
          // actions={[
          //   <SettingOutlined key="setting" />,
          //   <EditOutlined key="edit" />,
          //   <EllipsisOutlined key="ellipsis" />,
          // ]}
        >
          <div className="card-body-item">
            <Meta
              className="text-left mb-0 font-semibold"
              avatar={<Avatar src={i.avatar} />}
              title={i.tenNguoiTao}
              description={`Level: ${i.congViec.saoCongViec} Seller`}
            />
            <div className="text-left">
              <p className="job-description py-4 font-semibold text-base">
                {i.congViec.tenCongViec}
              </p>
              {/* <span className="font-bold star-icon text-base mr-2">
            Rating:
            </span> */}
              <span className="text-lg">
                {createStar(i.congViec.saoCongViec)}
              </span>
              <span className="star-rating text-lg">
                {" "}
                {`(${i.congViec.danhGia})`}
              </span>
            </div>
          </div>
          <div className="card-footer-item py-3">
            <div className="footer-item-content justify-between flex">
              <FontAwesomeIcon
                className="heart-icon"
                icon={faHeart}
                size="xl"
              />
              <div className="job-price-tag flex items-center space-x-2">
                <span className="job-price">Starting at </span>
                <span className="job-currency">US ${i.congViec.giaTien}</span>
              </div>
            </div>
          </div>
        </Card>
      );
    });
  };

  useEffect(() => {
    jobSevice
      .getJobDetail(idItem)
      .then((res) => {
        console.log(res.data.content);
        setItemDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idItem]);
  return (
    <div style={{ zIndex: "3000" }} className="w-full show-page py-40">
      <div className="show-banner space-y-8">
        <div className="container mx-auto show-banner-service space-y-3">
          <h1 className="font-bold text-3xl text-left">Result for "html"</h1>
          <div className="service flex justify-between">
            <div
              style={{ marginTop: "10px" }}
              className="left-show-banner flex space-x-4  justify-evenly"
            >
              <button className={buttonStyle}>
                <span className="pr-3">Category</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="1x"
                  hover="text-green-500"
                  className="icon"
                />
              </button>
              <button className={buttonStyle}>
                <span className="pr-3">Service Options</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="1x"
                  hover="text-green-500"
                  className="icon"
                />
              </button>

              <button className={buttonStyle}>
                <span className="pr-3">Seller Details</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="1x"
                  hover="text-green-500"
                  className="icon"
                />
              </button>

              <button className={buttonStyle}>
                <span className="pr-3">Budget</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="1x"
                  hover="text-green-500"
                  className="icon"
                />
              </button>

              <button className={buttonStyle}>
                <span className="pr-3">Delivery Time</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="1x"
                  hover="text-green-500"
                  className="icon"
                />
              </button>
            </div>
            <div
              style={{ marginTop: "10px" }}
              className="right-show-banner flex justify-end"
            >
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
        <div className="show-banner-service text-left container mx-auto space-x-4">
          <div className="categories-sort flex justify-between">
            <h1 className="pre-title">
              {itemDetail.length} Available Services
            </h1>
            <div className="sort-by flex">
              <span className="pre-title flex-1">Sort by</span>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
               
                <option selected value="relevance">Relevance</option>
                <option value="best-selling">Best Selling</option>
                <option value="new-arrivals">New Arrivals</option>
               
              </select>
            </div>
          </div>
          <div className="service-item flex justify-start space-x-5">
            {mapContent(itemDetail)}
          </div>
        </div>
      </div>
    </div>
  );
}
