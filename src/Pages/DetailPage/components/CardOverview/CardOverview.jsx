import { RiStarSFill } from "react-icons/ri";
// import CardDescription from "../CardDescription";
import CardNavbar from "../CardNavbar/CardNavbar";
import CardSeller from "../CardSeller";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardOver.css";

const CardOverview = ({
  navbar,
  // nhận props
  detail,
}) => {
  const onChange = (currentSlide) => {};

  return (
    <>
      <CardNavbar navbar={navbar} detail={detail} />
      <div id="cartTitle">
        <h1
          id="title"
          className="mb-10 text-3xl font-semibold text-black text-left"
        >
          {detail?.congViec.tenCongViec}
        </h1>
        <div id="cartRating" className="flex items-center">
          <img src={detail?.avatar} alt="" className="avatar-image" />
          <h4>{detail?.tenNguoiTao}</h4>
          <p>Top Rated Seller</p>
          <div className="flex items-center">
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
            <RiStarSFill size={20} color="#ffb33e" />
          </div>
          <p>({detail?.congViec?.danhGia})</p>
          <p>5 Orders in Queue</p>
        </div>
      </div>
      <div className="flex py-5">
        <span>
          <FontAwesomeIcon icon="fa-duotone fa-trophy-star" />
        </span>
      </div>
      <div className="">
        <Carousel className="slide-image" autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={detail?.congViec.hinhAnh} />
          </div>
          <div>
            <img src={detail?.congViec.hinhAnh} />
          </div>
          <div>
            <img src={detail?.congViec.hinhAnh} />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CardOverview;
