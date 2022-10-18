import React from "react";

import ListView from "../components/common/list-view/ListView";
import Slide from "../components/common/slider/Slide";
import { categories, slideImages } from "./data";
import "./layout.css";
import pic3 from "./slide-assets/pic03.png";
import pic4 from "./slide-assets/pic04.png";

export default function Layout() {
  return (
    <div className="layout ">
      <div className=" container">
        <div className="flex flex-col md:flex-row">
          <div className="w-56 bg-white pt-4 hidden md:inline">
            <ListView list={categories} />
          </div>
          <div className="pt-3 w-full  md:w-[calc(100%-30rem)] mx-auto">
            <Slide imageList={slideImages} />
          </div>
          <div className="pt-3 w-full  md:w-56">
            <div className=" w-full flex-wrap flex flex-row md:flex-col gap-4">
              <div className="w-full h-32 overflow-hidden flex items-center justify-center">
                <img
                  className="w-inherit h-inherit object-contain"
                  src={pic3}
                  alt="pic"
                />
              </div>
              <div className="w-full h-32 overflow-hidden flex items-center justify-center">
                <img
                  className="w-inherit h-inherit object-cover"
                  src={pic4}
                  alt="pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
