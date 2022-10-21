import React from "react";
import { ReactComponent as Love } from "../../../assets/icons/love2.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plusBack.svg";
import IconStyle from "../icon-style/IconStyle";

import "./ProductCart.css";

export default function ProductCard({ item }) {
  return (
    <div className="product-cart rounded-lg ">
      <div className="copy-icon">
        <span className=""></span>
        <span className=""></span>
      </div>
      <div>
        <img src={item.image} alt="images" />
      </div>
      <div className="bottom-bar-cart">
        <p className=" flex-1 text-white font-medium text-base whitespace-nowrap overflow-x-hidden text-ellipsis">
          {item.title || null}
        </p>
        <ul className="ml-4 flex w-20 justify-between">
          <li>
            <IconStyle style={{ width: "36px", height: "36px" }}>
              <Plus color="#6e6d7a" />
            </IconStyle>
          </li>
          <li>
            <IconStyle style={{ width: "36px", height: "36px", padding: "8px" }}>
              <Love fill="#6e6d7a" />
            </IconStyle>
          </li>
        </ul>
      </div>
    </div>
  );
}
