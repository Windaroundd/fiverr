import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { jobSevice } from "./../../services/jobService";
import { NavLink } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useDispatch } from "react-redux";
import { recieveId } from "../../redux-toolkit/headerItem";

export default function ListItem() {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch()
  const [jobDetail, setJobDetail] = useState(null);
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

 const dispatchId = (id) => { 
     dispatch(recieveId(id))
   }
  // const handleOnMouseOver = (event) => {
  //   console.log("event: ", event);
  //   const element_id = event.target.id;
  //   console.log("element_id: ", element_id);
  //   if (element_id == "job-detail") {
  //     return (
  //       <div className="">
  //         <h2></h2>
  //         <NavLink className="">
  //           <button>
  //             <ItemDetail id={item.id} />
  //           </button>
  //         </NavLink>
  //       </div>
  //     );
  //   } else {
  //     return <></>;
  //   }
  // };
  const filter = (idJob) => { 
    const filteredItem = item.filter(idJob=>{
        return  item.id== idJob
    })
    setJobDetail(filteredItem)
   }
  const mapItem =  () => {
     return  item?.map((item) => {
      return (
        <>
          <ul className="space-x-3 cursor-pointer job-item">
            <li
             
              id="job-item-li"
              className="job-item-li"
            >
              <h1  onMouseOver={()=>{dispatchId(item.id)}} className="job-category">{item.tenLoaiCongViec}</h1>
              <div id="job-detail" className="job-detail space-x-3 delay-150">
                {/* container item-detail mx-auto" */}
                <div className="container mx-auto text-left transition-all delay-500">
                  <h2></h2>
                  <NavLink className="">
                    <button >
                      <ItemDetail />
                    </button>
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
