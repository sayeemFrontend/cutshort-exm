import React from "react";
import { Link } from "react-router-dom";
import { discount, downLarge } from "../../../../../assets";
import Category from "../../../carts/category/Category";
import "./bottom.css";
export default function Bottom() {
  const dataList = [
    { id: 1, title: "Exclusive  Deals", expandable: true },
    { id: 2, title: "Smart Watches", expandable: true },
    { id: 3, title: "Cell Phone", expandable: false },
    { id: 4, title: "Headphone", expandable: false },
  ];
  return (
    <div className="bottom flex flex-wrap  items-center justify-between">
      {/* <div className="px-2 rounded-t-lg bg-secondary w-56 h-14 hidden md:inline">
        <Category />
      </div> */}
      {/* <ul className="px-4 mt-4 md:mt-0 hidden md:inline flex-1  min-w-[270px] max-w-[40rem] text-primary-light text-sm">
        <div className="w-full flex flex-wrap items-center justify-evenly">
          {dataList?.map((it) =>
            !it.expandable ? (
              <Link key={it.id}>{it.title}</Link>
            ) : (
              <div key={it.id} className="w-max flex">
                <li>{it.title}</li>
                <img src={downLarge} alt="" className="inline ml-2"></img>
              </div>
            )
          )}
        </div>
      </ul>

      <div className="w-44 hidden  lg:flex items-center justify-between flex-wrap  mt-4 md:mt-0 ml-0 ">
        <img src={discount} alt="icon" />
        <p className="mx-2 text-[#FF4E53] text-base leading-4">
          <span className="opacity-50 text-xs text-primary-light">Only this weekend</span>
          <br />
          Super Discount
        </p>
        <img src={downLarge} alt="icon" />
      </div> */}
    </div>
  );
}
