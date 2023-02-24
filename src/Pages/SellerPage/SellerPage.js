import React from "react";
import CardSellerProfile from "./components/CardSellerProfile/CardSellerProfile";
import ListGigsContainer from "./components/ListGigs.container";
import CardInfoSeller from "./components/CardInfoSeller/CardInfoSeller";
import "./SellerPage.css";
import { useSelector } from "react-redux";
export default function SellerPage() {
  const { user } = useSelector((state) => state.userSliceLogin.userLogin);

  return (
    <div className="container-profile ">
      <div className="grid grid-cols-8 gap-3">
        <div className=" p-4 col-span-2">
          <CardInfoSeller user={user} />
          <CardSellerProfile user={user} />
        </div>
        <div className=" p-4 col-span-6">
          <ListGigsContainer user={user} />
          
        </div>
      </div>
    </div>
  );
}
