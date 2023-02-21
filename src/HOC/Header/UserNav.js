import React from "react";
import { useSelector } from "react-redux";
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
          <span className="font-medium text-slate-300">
            {userLogin?.user?.name}
          </span>
          <button
            onClick={handleLogout}
            className="border-2 mx-2 px-2 py-2 rounded  text-white font-medium"
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <>
          <button
            style={{
              border: "0",
            }}
            onClick={() => {
              window.location.href = "/signin";
            }}
            className="border-2 border-red-500 px-5 py-2 rounded hover:text-red-500 font-medium"
          >
            <li>Signup</li>
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
            className="button-join ml-2 bg-transparent hover:bg-green-400 text-white-700 font-semibold hover:text-white!important py-2 px-4 border  hover:border-transparent"
          >
            Join
          </button>
        </>
      );
    }
  };
  return <div>{renderContent()}</div>;
}
