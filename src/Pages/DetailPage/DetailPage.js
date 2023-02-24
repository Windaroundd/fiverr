import React, { useState } from "react";
import CardOverview from "./components/CardOverview/CardOverview";
import CardDescription from "./components/CardDescription/CardDescription";
import CardSeller from "./components/CardSeller/CardSeller";
import CardContent from "./components/CardContent/CardContent";
import "./DetailPage.scss";
import CardTabLabel from "./components/CardTabLabel/CardTabLabel";
import CardComment from "./components/CardComment/CardComment";
import { useParams } from "react-router";
import { jobSevice } from "../../services/jobService";
export default function DetailPage() {
  //  tạo state để luu trữ data khi call từ api
  const [detail, setDetail] = React.useState();
  // lấy id từ url bằng useParam
  const { id } = useParams();
  // dùng react hook để call api và check nếu call api thành công sẽ gắn giá trị từ api vào state
  React.useEffect(() => {
    jobSevice.getDetailGig(id).then((data) => {
      if (data.status === 200) setDetail(data.data.content[0]);
    });
  //  
  }, [id]);

  return (
    <div>
      <div id="container">
        <div id="cartLeftSide">
          <CardOverview
            image=""
            title=""
            author=""
            level=""
            viewer=""
            orders=""
            navbar=""
            // props truyền xuống 
            detail={detail}
          />
          <CardDescription detail={detail}/>
          <CardSeller detail={detail}/>
          <CardComment />
        </div>
        <div id="cartTabs">
          <CardTabLabel />
          <div id="tab-content">
            <CardContent
           detail={detail}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
