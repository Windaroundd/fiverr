import React from "react";
import {
  RiLoader4Fill,
  RiTimer2Line,
  RiCheckLine,
  RiArrowRightLine,
} from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CardContent = ({ detail }) => {
  const {userLogin} = useSelector(state => state.userSliceLogin)
  const navigate = useNavigate()
  const handleSubmit = () => {
    if(!userLogin)
    return navigate('/signin')

    console.log('submit')
  }
  return (
    <div id="9">
      <div className="header-default">
        <h4 className="flex items-center justify-between">
          <b className="title">Basic</b>
          <div className="price-wrapper">
            <span className="price" style={{ fontSize: 30 }}>
              $1,000
            </span>
          </div>
        </h4>
        <div className="text-left">
          <span>{detail?.congViec?.moTaNgan}</span>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="flex ">
          <RiTimer2Line />
          <b className="pl-1">5 Days Delivery</b>
        </div>
        <div className="flex ml-5">
          <RiLoader4Fill />
          <b className="pl-1">3 Revision</b>
        </div>
      </div>
      <div className="cart-features">
        <ul>
          <li className="flex items-center">
            <RiCheckLine color={"#1dbf73"} size="30" />
            <p>2 concepts included</p>
          </li>
          <li className="flex items-center">
            <RiCheckLine color={"#1dbf73"} size="30" />
            <p>Logo transparency</p>
          </li>
          <li className="flex items-center">
            <RiCheckLine color={"#1dbf73"} size="30" />
            <p>Vector file</p>
          </li>
          <li className="flex items-center">
            <RiCheckLine color={"#1dbf73"} size="30" />
            <p>Printable file</p>
          </li>
          <li className="flex items-center">
            <RiCheckLine color={"#1dbf73"} size="30" />
            <p>Source file</p>
          </li>
        </ul>
      </div>
      <div className="flex">
        <button className="cart-continue-btn" onClick={handleSubmit}>
          Continue {detail?.congViec?.giaTien} $
        </button>
        <span></span>
      </div>
      <button className="cart-compare-btn">Compare Pakages</button>
    </div>
  );
};

export default CardContent;
