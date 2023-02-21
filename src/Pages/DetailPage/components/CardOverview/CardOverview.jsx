import { RiStarSFill } from "react-icons/ri";
import CardDescription from "../CardDescription";
import CardNavbar from "../CardNavbar/CardNavbar";
import CardSeller from "../CardSeller";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const CardOverview = ({
  title,
  avatar,
  author,
  level,
  viewer,
  orders,
  navbar,
  image,
  // nhận props
  detail,
}) => {
  console.log("card", detail);
  return (
    <>
      <CardNavbar navbar={navbar} />
      <div id="cartTitle">
        <h1
          id="title"
          className="mb-10 text-3xl font-semibold text-black text-left"
        >
          {detail?.congViec.tenCongViec}
          {/*  */}
        </h1>
        <div id="cartRating" className="flex items-center">
          
          <img src={detail?.congViec.avatar} alt="" className="avatar-image" />
          <h4>imohsinalii</h4>
          <p>Top Rated Seller</p>
          <div className="flex items-center">
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
          </div>
          <p>({viewer?.toString() || 0})</p>
          <p>{orders?.toString() || 0} Orders in Queue</p>
        </div>
      </div>
      <div
        id="cartMiddle
      "
      >
       
        <Slide>
          <div className="h-auto">
            <button>
              <img src={detail?.congViec.hinhAnh} alt="image" />
            </button>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default CardOverview;
