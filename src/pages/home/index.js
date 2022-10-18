import "./index.css";

import React from "react";
import PopularCategory from "./sections/popular-category/PopularCategory";

export default function Home() {
  return (
    <div className="home container">
      <div className="mt-14">
        <PopularCategory />
      </div>
    </div>
  );
}
