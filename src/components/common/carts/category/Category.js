import React from "react";
import { downTriangle, menuBar } from "../../../../assets";

export default function Category() {
  return (
    <div className="category w-full h-full  text-primary-light flex items-center justify-between">
      <img src={menuBar} alt="icon" />
      <p className="text-sm">Top Categories</p>
      <img src={downTriangle} alt="icon" />
    </div>
  );
}
