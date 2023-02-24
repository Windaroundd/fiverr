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
        <div>
          <NavLink to={"/me"}>
            <span className="font-medium text-slate-500">
            {userLogin?.user?.name}
          </span>
          </NavLink>
          
          <button
            onClick={handleLogout}
            className=" ml-2 bg-transparent bg-green-400 text-white-700 font-semibold hover:text-white!important py-2 px-4 border rounded  hover:border-transparent"
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div >
          <div >
            <button
              className="text-xl cursor-pointer px-2 py-2 rounded text-black font-medium "
              style={{
                border: "0",
              }}
              onClick={() => {
                window.location.href = "/signin";
              }}
            >
              <li> Sign in</li>
            </button>
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
           
          </div>
        </div>
      );
    }
  };
  return <div>{renderContent()}</div>;
}
