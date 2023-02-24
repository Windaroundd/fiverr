import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGlobe,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Form, NavLink } from "react-router-dom";
import ListItem from "./ListItem";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { recievedName } from "../../redux-toolkit/searchItem";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserNav from "./UserNav";
export default function Header() {
  const [searchItem, setSearchItem] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const formSubmitted = useSelector((state) => {
    return state.searchItem.formSubmitted;
  });
  const [navBar, setNavBar] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    "Help Center",
    "Fiverr Forum",
    "Fiver Blogs",
    "Ask the Community",
    "Contact Support",
  ];
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(recievedName(searchItem));
    // navigation('/job')
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 10) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    };

    console.log("formSubmitted: ", formSubmitted);
    console.log('location.pathname!="/": ', location.pathname != "/");
    if (formSubmitted) {
      window.removeEventListener("scroll", changeBackground);
      setNavBar(true);
      // navigation('/job')
    } else if (location.pathname !== "/") {
      setNavBar(true);
      window.removeEventListener("scroll", changeBackground);
    } else {
      window.addEventListener("scroll", changeBackground);
    }
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [formSubmitted, navBar]);

  return (
    <div className="main">
      <header className={navBar ? "header" : "header-active"}>
        <div className="header-wrapper">
          <div className="mx-auto container ">
            <div className="header-row flex items-center justify-between">
              <div className="left">
                <div className="flex items-center space-x-5 justify-evenly  text-white">
                  <FontAwesomeIcon
                    type="button"
                    style={{ flexBasis: "40%" }}
                    className=" sm:block md:block lg:hidden xl:hidden  bar-icon cursor-pointer"
                    icon={faBars}
                    size="xl"
                    id="baricon"
                    data-modal-target="top-left-modal"
                    data-modal-toggle="top-left-modal"
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
                    <form onSubmit={handleSubmit}>
                      <div className="search-form block">
                        <span className="flex">
                          <input
                            style={{ color: "#000" }}
                            value={searchItem}
                            onChange={handleChange}
                            type="search"
                            name="search"
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
              <div className="right invisible xl:visible">
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

                    <UserNav />
                  </ul>
                </div>
              </div>

              <div
                id="top-left-modal"
                data-modal-placement="top-left"
                tabIndex={-1}
                className="fixed top-0 left-0 right-0 z-50 hidden w-full pr-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-screen"
              >
                <div
                  style={{ width: "100vw" }}
                  className="relative sm:w-auto h-screen max-w-2xl md:h-screen"
                >
                  {/* Modal content */}
                  <div className="relative bg-white md:w-96 sm:w-auto h-full rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-5 rounded-t dark:border-gray-600">
                      <UserNav />
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="top-left-modal"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="px-6 space-y-6">
                      <ul className="nav-bar-responsive">
                        <li className="active">Fiver Pro</li>
                        <li>Explore</li>
                        <li>Messages</li>
                        <li>List</li>
                        <li>Orders</li>
                      </ul>
                    </div>

                    <div className="dropdown-toggle-show">
                      <div className="dropdown px-6">
                        <h1
                          className="selected-option"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          <span className="mr-3">Helps and Resource</span>
                          <span>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="icon-down"
                              size="lg"
                            />
                          </span>
                        </h1>
                        <div className="option-chosen">{selectedOption}</div>
                        {isOpen && (
                          <ul className="options-list">
                            {options.map((option) => (
                              <li
                                key={option}
                                onClick={() => handleOptionChange(option)}
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <div
        className={
          navBar
            ? "show-list-item hidden lg:block"
            : "hide-list-item hidden lg:block"
        }
      >
        <ListItem />
      </div>
    </div>
  );
}
