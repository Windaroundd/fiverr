import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import "./CardNavbar.scss";
export default function CardNavbar({ navbar, detail }) {
  return (
    <nav className=" categories-breadcrumbs">
      <ul className="flex items-center">
        <li className="flex items-center">
          <span className="category-breadcrumbs ">
            <a href="#">{detail?.tenLoaiCongViec}</a>
          </span>
          <RiArrowDropRightLine size={30} />
          <span className="category-breadcrumbs ">
            <a href="#">{detail?.tenNhomChiTietLoai}</a>
          </span>
          <RiArrowDropRightLine size={30} />
          <span className="category-breadcrumbs ">
            <a href="#">{detail?.tenChiTietLoai}</a>
          </span>
        </li>
      </ul>
    </nav>
  );
}
