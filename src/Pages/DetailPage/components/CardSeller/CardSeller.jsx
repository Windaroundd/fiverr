import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  RiArrowDownFill,
  RiArrowDownLine,
  RiArrowDownSFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import "./CardSeller.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export default function CardSeller({ detail }) {
  return (
    <div>
      <div>
        <h2 className="text-2xl pt-6 text-left pb-5 font-bold ">
          <span>About The Seller</span>
        </h2>
        <div className="profile-card">
          <div className="seller-card">
            <div className="profile-info">
              <div className="user-profile-image">
                <label
                  className="profile-pict"
                  style={{ width: 110, height: 110, fontSize: "2.2em" }}
                  htmlFor="profile_image_6613816671760"
                >
                  <img
                    src={detail?.avatar}
                    className="profile-pict-img"
                    alt="stylishwebs"
                  />
                  <a
                    href="/levels"
                    rel="nofollow"
                    className="user-badge-round md locale-en-us level-two-seller"
                  />
                </label>
              </div>

              <div className="user-profile-label mb-0">
                <div className="username-line mb-0">
                  <p>{detail?.congViec?.nguoiTao}</p>
                </div>
                <div className="one-liner-rating-wrapper">
                  <p className="one-liner">Email</p>
                  <div className="orca-rating seller-rating color-yellow tbody-6">
                    <div className="stars">
                      <span
                        className="nFghBOe orca-star"
                        style={{ width: 15, height: 15 }}
                        aria-hidden="true"
                      >
                        <svg
                          width={16}
                          height={15}
                          viewBox="0 0 16 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                          />
                        </svg>
                      </span>
                      <span
                        className="nFghBOe orca-star"
                        style={{ width: 15, height: 15 }}
                        aria-hidden="true"
                      >
                        <svg
                          width={16}
                          height={15}
                          viewBox="0 0 16 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                          />
                        </svg>
                      </span>
                      <span
                        className="nFghBOe orca-star"
                        style={{ width: 15, height: 15 }}
                        aria-hidden="true"
                      >
                        <svg
                          width={16}
                          height={15}
                          viewBox="0 0 16 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                          />
                        </svg>
                      </span>
                      <span
                        className="nFghBOe orca-star"
                        style={{ width: 15, height: 15 }}
                        aria-hidden="true"
                      >
                        <svg
                          width={16}
                          height={15}
                          viewBox="0 0 16 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                          />
                        </svg>
                      </span>
                      <span
                        className="nFghBOe orca-star"
                        style={{ width: 15, height: 15 }}
                        aria-hidden="true"
                      >
                        <svg
                          width={16}
                          height={15}
                          viewBox="0 0 16 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <b className="rating-score">5</b>
                    <span className="ratings-count">
                      ({/* */}900{/* */})
                    </span>
                  </div>
                </div>
                <NavLink to={"/seller"}>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Contact me
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq py-10">
        <h2 className="text-left font-bold">FAQ</h2>
        <div className="flex justify-between mb-5 mt-5">
          <p>Do you provide regular update on order?</p>
          <RiArrowDownSLine />
        </div>
        <hr />
        <div className="flex justify-between mb-5 mt-5">
          <p>How do you guarantee product quality and rellability?</p>
          <RiArrowDownSLine />
        </div>
        <hr />
        <div className="flex justify-between mb-5 mt-5">
          <p>Do you give post-development support?</p>
          <RiArrowDownSLine />
        </div>
        <hr />
        <div className="flex justify-between mb-5 mt-5">
          <p>Do you convert PSD to HTML?</p>
          <RiArrowDownSLine />
        </div>
      </div>
      <div className="voting">
        <header className="flex justify-between">
          <div>
            <span className="healing">34 reviews for this Gig</span>
            <FontAwesomeIcon className="fa fa-star checked" icon={faStar} />
            <FontAwesomeIcon className="fa fa-star checked" icon={faStar} />
            <FontAwesomeIcon className="fa fa-star checked" icon={faStar} />
            <FontAwesomeIcon className="fa fa-star checked" icon={faStar} />
            <FontAwesomeIcon className="fa fa-5" icon={faStar} />
          </div>
          <div>
            <div className="flex justify-between">
              <span className="mr-1">Sort By</span>
              <span className="font-bold">Most relevant</span>
              <RiArrowDownSLine className="mt-1 ml-1" />
            </div>
          </div>
        </header>
        <div className="flex pt-5">
          <div class="row">
            <div class="side">
              <div>5 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-5"></div>
              </div>
            </div>
            <div class="side right">
              <div>150</div>
            </div>
            <div class="side">
              <div>4 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-4"></div>
              </div>
            </div>
            <div class="side right">
              <div>63</div>
            </div>
            <div class="side">
              <div>3 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-3"></div>
              </div>
            </div>
            <div class="side right">
              <div>15</div>
            </div>
            <div class="side">
              <div>2 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-2"></div>
              </div>
            </div>
            <div class="side right">
              <div>6</div>
            </div>
            <div class="side">
              <div>1 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-1"></div>
              </div>
            </div>
            <div class="side right">
              <div>20</div>
            </div>
          </div>
          <div className="breakdown pl-20 text-left text-sm">
            <span className="font-bold">Rating Breakdown</span>
            <div className="flex mt-5">
              <span>Seller communication level</span>
              <div className="ml-20">
                <span>5</span>
                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
              </div>
            </div>
            <div className="flex mt-5">
              <span>Seller communication level</span>
              <div className="ml-20">
                <span>5</span>
                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
              </div>
            </div>
            <div className="flex mt-5">
              <span>Seller communication level</span>
              <div className="ml-20">
                <span>5</span>
                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-left py-10">
          <span className="font-bold text-left">Filters</span>
          <div className="flex pt-5">
            <span className="text-sm">Industry</span>
            <span className="ml-1 font-bold mr-1 text-sm">All Industries</span>
            <a href="">
              <RiArrowDownSLine className="mt-1" />
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
