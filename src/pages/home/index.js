import "./index.css";

import React from "react";
import { products, slideImages } from "../../data/data";
import Slide from "../../components/common/slider/Slide";
import ProductSection from "./sections/product/ProductSection";
import UserSection from "./sections/user/UserSection";

export default function Home() {
  return (
    <div className="home h-[1500px] container">
      <div className="">
        <UserSection />
      </div>
      <div className="mx-auto max-w-screen-md">
        <Slide imageList={slideImages} />
      </div>
      <div className="container">
        <ul className="flex items-center justify-between">
          <li className="font-bold text-base">More by Eren ツ</li>
          <li className="text-sm text-secondary hover:opacity-70 cursor-pointer">View profile</li>
        </ul>
        <ProductSection products={products} />
      </div>
    </div>
  );
}
