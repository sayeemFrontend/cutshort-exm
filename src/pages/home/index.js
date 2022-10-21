import "./index.css";

import React from "react";
import { products, slideImages } from "../../data/data";
import Slide from "../../components/common/slider/Slide";
import ProductSection from "./sections/product/ProductSection";
import UserSection from "./sections/user/UserSection";
import UserIconSec from "./sections/user/UserIconSec";
import userImage from "../../assets/images/man.webp";
import Description from "./sections/user/Description";
import UserHire from "./sections/user/UserHire";
import LIcon from "../../assets/icons/LIcon.svg";
import FIcon from "../../assets/icons/FIcon.svg";

export const user = {
  id: 1,
  name: "Eren ツ",
  heading: "Onboarding #Exploration",
  image: userImage,
};

export default function Home() {
  return (
    <div className="home container mb-10">
      <div className="sticky top-10 float-right hidden lg:block">
        <UserIconSec user={user} />
      </div>
      <div className="mb-6 mt-16 lg:mx-44">
        <UserSection user={user} />
      </div>
      <div className="mb-6 block lg:hidden ">
        <UserIconSec user={user} />
      </div>
      <div className="mb-[126px] lg:mx-44">
        <Slide imageList={slideImages} />
      </div>
      <div className="mb-10 lg:mx-44">
        <Description />
      </div>

      <div className="mb-16 lg:mx-16">
        <UserHire user={user} />
      </div>

      <div className="mb-12 productSec lg:mx-16">
        <ul className="mb-2 flex items-center justify-between">
          <li className="font-bold text-base">More by Eren ツ</li>
          <li className="text-sm text-secondary hover:opacity-70 cursor-pointer">View profile</li>
        </ul>
        <ProductSection products={products} />
      </div>
      <div className="mb-12 mx-auto w-24 flex items-center justify-between">
        <img src={LIcon} alt="icon" />
        <img src={FIcon} alt="icon" />
        <li className="text-xs">Like</li>
      </div>
    </div>
  );
}
