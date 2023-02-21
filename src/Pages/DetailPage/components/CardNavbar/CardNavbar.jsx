import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import "./CardNavbar.scss";
export default function CardNavbar({ navbar, detail }) {
  return (
    <nav className=" categories-breadcrumbs">
      <ul className="flex items-center">
        <li className="flex items-center">
          <span className="category-breadcrumbs ">
            <a href="#">{detail?.congViec?.tenLoaiCongViec}</a>
          </span>
          <RiArrowDropRightLine size={30} />
          <span className="category-breadcrumbs ">
            <a href="#">{detail?.congViec?.tenNhomChiTietLoai}</a>
          </span>
          <RiArrowDropRightLine size={30} />
          <span className="category-breadcrumbs ">
            <a href="#">{detail?.congViec?.tenChiTietLoai}</a>
          </span>
        </li>
      </ul>
    </nav>
  );
}
