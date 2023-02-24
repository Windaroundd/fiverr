import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardSellerProfile({ user }) {
  return (
    <div className="seller-profile border p-5 ">
      <div className="description flex justify-between">
        <h3 className="font-bold">Description</h3>
        <a href="" className="text-blue-500">
          Edit
        </a>
      </div>
      <hr className="my-5" />
      <div className="languages">
        <div className="flex justify-between">
          <h3 className="font-semibold ">Languages</h3>
          <a href="" className="text-blue-500">
            Add now
          </a>
        </div>
        <hr className="my-5" />
      </div>
      <div className="linked-accounts">
        <h3 className="font-semibold text-left">Linked Accounts</h3>
        <ul>
          <li className="social-account text-left">
            <div className="flex">
              <a href="" className="font-semibold text-3xl text-blue-500 ">
                +
              </a>
              <span className="mx-5 mt-2">Facebook</span>
            </div>
          </li>
          <li className="social-account text-left">
            <div className="flex">
              <a href="" className="font-semibold text-3xl text-blue-500 ">
                +
              </a>
              <span className="mx-5 mt-2">LinkedIn</span>
            </div>
          </li>
          <li className="social-account text-left">
            <div className="flex">
              <a href="" className="font-semibold text-3xl text-blue-500 ">
                +
              </a>
              <span className="mx-5 mt-2">GitHub</span>
            </div>
          </li>
          <li className="social-account text-left">
            <div className="flex">
              <a href="" className="font-semibold text-3xl text-blue-500 ">
                +
              </a>
              <span className="mx-5 mt-2">Gmail</span>
            </div>
          </li>
        </ul>
      </div>
      <hr className="my-5" />
      <div className="skills flex justify-between">
        <h3 className="font-semibold text-left">Skills</h3>
        <a href="" className="text-blue-500">Add New</a>
      </div>
     
    </div>
  );
}
