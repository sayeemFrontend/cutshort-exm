import "./popularCategory.css";

import React from "react";
import { popularCategories } from "./data/data";
import PopularCategoryCard from "../../../../components/common/carts/popular-category/PopularCategoryCard";

export default function PopularCategory() {
  return (
    <div className="popular-category">
      <p className="mb-6 text-primary-dark text-xl font-bold">
        Popular Product Categories
      </p>

      <div className="flex gap-3 flex-wrap">
        {popularCategories?.map((it) => (
          <div key={it.id} className="w-full sm:w-64 h-16">
            <PopularCategoryCard item={it} />
          </div>
        ))}
      </div>
    </div>
  );
}
