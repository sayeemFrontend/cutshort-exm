import React from "react";
import ListItem from "../list-item/ListItem";
import "./dropDown.css";
export function Test() {
  return <div>sayee</div>;
}
export default function DropDown({ item }) {
  return (
    <div className="drop-down w-full">
      <div className="header">
        <ListItem component={Test} className="text-lg lg:text-sm" item={item} />
      </div>
      <div className="body">
        {item.subList?.map((item) => (
          <ListItem className="text-base lg:text-sm" key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
