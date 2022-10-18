import React from "react";
import { Link } from "react-router-dom";
import { downS } from "../../../../../assets";
import "./top.css";

export default function Top() {
  const leftItems = [
    { id: 1, title: "About Us" },
    { id: 2, title: "My Account" },
    { id: 3, title: "Featured Products" },
    { id: 4, title: "Contact" },
  ];
  const rightItems = [
    { id: 1, title: "Order Tracking", expandable: false },
    { id: 2, title: "English", expandable: true },
    { id: 3, title: "USD", expandable: true },
  ];
  return (
    <div className=" topBar">
      <ul className="left-items  w-full md:w-96 flex flex-wrap justify-between items-center">
        {leftItems?.map((it) => (
          <>
            <Link>{it.title}</Link>
            <div className="inline h-3 w-0.5 bg-white last:hidden"></div>
          </>
        ))}
      </ul>
      <ul className="right-items  w-64  flex flex-wrap justify-between items-center mt-4 md:mt-0">
        {rightItems?.map((it) => (
          <Link key={it.id}>
            {it.title}
            {it.expandable && (
              <img src={downS} alt="" className="inline ml-2"></img>
            )}
          </Link>
        ))}
      </ul>
    </div>
  );
}
