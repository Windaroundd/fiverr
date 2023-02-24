import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { jobSevice } from "./../../../services/jobService";

export default function ListGigsContainer({ user }) {
  const [posts, setPosts] = React.useState();
  // const [loading, setLoading] = React.useState(true);
  // console.log('loading: ', loading);

  React.useEffect(() => {
    jobSevice.getGigBySeller().then((value) => {
      setPosts(value.data);
      // setLoading(false);
    });
  }, []);
  return (
    <div className="w-100 space-x-2">
      {/* {loading ? (
        <p>loading...</p>
      ) : ( */}
        <div className=" rounded">
          <div className="flex gig-item">
            <img
              src="https://img.timviec.com.vn/2020/10/coder-la-gi-2.jpg"
              alt=""
              style={{
                width: "200px",
                height: "150px",
              }}
            />
            <div className="ml-5">
              <h3 className="font-semibold my-5 text-left">
                Lập trình front end với Reactjs
              </h3>
              <div className="flex">
                <p>
                  I will design a creative and unique webpage for you. The best
                  website design gig on Fiverr!
                </p>
                <div className="flex items-center ml-2">
                  <RiStarSFill size={20} color="#ffb33e" />
                  <RiStarSFill size={20} color="#ffb33e" />
                  <RiStarSFill size={20} color="#ffb33e" />
                  <RiStarSFill size={20} color="#ffb33e" />
                  <RiStarSFill size={20} color="#ffb33e" />
                  <span>5</span>
                </div>
              </div>
              <div className="mt-5">
                <button className="p-2 rounded border font-medium mr-2">
                  View detail
                </button>
                <button className="p-2 rounded border font-medium mr-2">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
  );
}
