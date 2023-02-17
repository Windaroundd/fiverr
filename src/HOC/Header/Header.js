import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Form, NavLink } from "react-router-dom";
import ListItem from "./ListItem";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const [navBar, setNavBar] = useState();
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 10) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    };
    if (location.pathname != "/") {
      setNavBar(true);
      window.removeEventListener("scroll", changeBackground);
    } else {
      window.addEventListener("scroll", changeBackground);
    }
  }, [navBar]);

  return (
    <div className="main">
      <header className={navBar ? "header" : "header-active"}>
        <div className="header-wrapper">
          <div className="mx-auto container ">
            <div className="header-row flex items-center justify-between">
              <div className="left">
                <div className="flex items-center  text-white">
                  <FontAwesomeIcon
                    className="hidden"
                    icon={faBars}
                    size="1x"
                    id="baricon"
                  />
                  <div className="nm">
                    <div>
                      <a aria-current="page" class="logo active" href="/">
                        <svg
                          width="89"
                          height="27"
                          viewBox="0 0 89 27"
                          fill="none"
                          color="#000"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            className={navBar ? "fill" : "fill-white"}
                            fill="#404145"
                          >
                            <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                          </g>
                          <g fill="#1dbf73">
                            <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="header-search">
                    <form>
                      <div className="search-form">
                        <span>
                          <input
                            type="search"
                            name="resultParams"
                            className={navBar ? "inp-active" : "inp"}
                            placeholder="Find Services"
                          />
                          <button className="search-btn px-4 py-2">
                            Search
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="">
                  <ul className="flex items-center justify-around cursor-pointer text-white">
                    <li>Fiverr Business</li>
                    <li>Explore</li>
                    <li className="space-x-1">
                      <FontAwesomeIcon
                        className={navBar ? "icon-active" : "icon-inactive"}
                        icon={faGlobe}
                      />
                      <span>English</span>
                    </li>
                    <li>US$ USD</li>
                    <li>Become a Seller</li>
                    <li>
                      <NavLink to="/signin">Signin</NavLink>
                    </li>
                    <li>
                      <NavLink to="/signup">
                        <button
                          style={{
                            borderRadius: "4px",
                            transition: "0.5s",
                            border: "1px solid #1dbf37",
                            color: "#1dbf73",
                          }}
                          className="button-join ml-2 bg-transparent hover:bg-green-400 text-white-700 font-semibold hover:text-white!important py-2 px-4 border  hover:border-transparent "
                        >
                          Join
                        </button>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <div className={navBar ? "show-list-item" : "hide-list-item"}>
        <ListItem />
      </div>
    </div>
  );
}
