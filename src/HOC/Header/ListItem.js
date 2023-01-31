import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { jobSevice } from "./../../services/jobService";
import { NavLink } from "react-router-dom";
export default function ListItem() {
  const [item, setItem] = useState([]);
  const [jobDetail, setJobDetail] = useState([]);
  useEffect(() => {
    jobSevice
      .getJobCategory()
      .then((res) => {
        setItem(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
   
  }, []);
  const mapItemDetail = (id) => { 
      jobSevice.getJobList(id)
       .then((res) => {
         console.log('resFromMapItem',res);
         setJobDetail(res.data.content)
       })
       .catch((err) => {
         console.log(err);
            });
   }
  const mapItem = () => {
    return item?.map((item) => {
      return (
        <>
          <ul className="space-x-3 cursor-pointer job-item">
            <li className="job-item-li">
              <h1>{item.tenLoaiCongViec}</h1>
              <div className="job-detail space-x-3">
                <div className="container mx-auto">
                  <h2></h2>
                  <NavLink>
                    <button onClick={()=>{mapItemDetail(item.id)}}>hi</button>
                  </NavLink>
                </div>
              </div>
            </li>
          </ul>
        </>
      );
    });
  };
  return (
    <div className="container mx-auto py-3">
      <div className="flex item-list justify-evenly">{mapItem()}</div>
    </div>
  );
}
