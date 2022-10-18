import React from "react";

export default function PopularCategoryCard({ item }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-light text-primary-dark text-sm rounded">
      <div className="flex items-center">
        <img className="mr-3" src={item.icon} alt="icons" />
        <p>{item.title}</p>
      </div>
    </div>
  );
}
