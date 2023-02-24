import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLocalService } from "../../services/localService";

export default function UserNav() {
  let userLogin = useSelector((state) => {
    return state.userSliceLogin.userLogin;
  });

  const handleLogout = () => {
    // Xóa dữ liệu từ localStore
    userLocalService.remove();
    window.location.reload();
    window.location.href = "/";
  };
  const renderContent = () => {
    if (userLogin) {
      return (
        <div className="user">
          <ul className="block md:flex">
            <li className="pt-2 ml-1">
              <NavLink to={"/me"}>
                <span className="md:font-semibold font-extrabold text-2xl  text-slate-400 md:text-base ">
                  {userLogin?.user?.name}
                </span>
              </NavLink>
            </li>
            <li className="mr-16 mt-2 text-white-700 font-semibold hover:text-white!important">
              <button
                onClick={handleLogout}
                className=" ml-2 bg-transparent bg-green-400  py-2 px-4 border rounded  hover:border-transparent"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <ul className="md:flex block">
             
              <li>
                <button
                  className=" cursor-pointer px-2 py-2 rounded  md:font-medium md:text-xl text-2xl font-extrabold "
                  style={{
                    border: "0",
                  }}
                  onClick={() => {
                    window.location.href = "/signin";
                  }}
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  style={{
                    borderRadius: "4px",
                    transition: "0.5s",
                    border: "1px solid #1dbf37",
                    color: "#1dbf73",
                  }}
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                  className="button-join ml-2 bg-transparent hover:bg-green-400 text-white-700 font-semibold hover:text-white!important py-2 px-4 border  hover:border-transparent "
                >
                  Join
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  };
  return <div>{renderContent()}</div>;
}
