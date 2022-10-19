import "./index.css";

import React from "react";
import { slideImages } from "../../data/data";
import Slide from "../../components/common/slider/Slide";

export default function Home() {
  return (
    <div className="home h-[1500px] container">
      <div className="mx-auto max-w-screen-md">
        <Slide imageList={slideImages} />
      </div>
    </div>
  );
}
