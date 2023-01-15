import React, { useState } from "react";
import { checkIcon } from "../assets/heroIcon";
import { Modal } from "flowbite";
import InfoModal from "./InfoModal";
export default function Infor() {
  const [infoModal,setInfoModal] = useState(false)
  const handleCloseModal = () => { setInfoModal(false) }
    return (
    <div style={{ backgroundColor: "#f0fdf6" }} className="">
      <div className="container mx-auto">
        <div className="info flex justify-between items-center">
          <div className="contentInfo text-4xl pl-11 w-1/2">
            <h1 className="text-left">
              A whole world of freelance talent at your fingertips
            </h1>
            <ul className="selling">
              <li>
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "rgb(122,125,133)",
                    marginRight: "10px",
                  }}
                >
                  {checkIcon}
                </span>
                <span>The best for every budget</span>
                <p>
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </li>
              <li>
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "rgb(122,125,133)",
                    marginRight: "10px",
                  }}
                >
                  {checkIcon}
                </span>
                <span>Quality work done quickly</span>
                <p>
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </li>
              <li>
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "rgb(122,125,133)",
                    marginRight: "10px",
                  }}
                >
                  {checkIcon}
                </span>
                <span>Protected payments, every time</span>
                <p>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </li>
              <li>
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "rgb(122,125,133)",
                    marginRight: "10px",
                  }}
                >
                  {checkIcon}
                </span>
                <span>24/7 support</span>
                <p>
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div className="video">
             <button
             onClick={()=>{setInfoModal(true)}}
            id="defaul"
              className="modal-btn"
              data-bs-target="#defaultModal"
              data-bs-toggle="defaultModal"
              type="button"
            >
              <img src="http://demo5.cybersoft.edu.vn/img/selling.png" alt="" />
            </button>
           <InfoModal onClose={handleCloseModal} visible={infoModal}/>
           







          </div>
        </div>
      </div>
    </div>
  );
}
