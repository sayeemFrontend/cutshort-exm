import React, { useState } from "react";
import "./dropDown.css";

export function WebSubItemDisplay({ item }) {
  const { title = "", subTitle = "", rightIcon = null, leftIcon = null, underLine = null } = item;
  return (
    <>
      <ul className="mb-4 flex items-center group cursor-pointer">
        {leftIcon && <ul className={`icon-style group-hover:opacity-100`}>{leftIcon()}</ul>}
        <ul className="flex-1 my-2  mr-[50px]">
          <li className="mb-1 text-sm cursor-pointer font-medium w-full  text-primary-dark">{title}</li>
          <li className="text-xs cursor-pointer max-w-[252px]  w-full font-normal text-primary">{subTitle}</li>
        </ul>
        {rightIcon && <ul className="opacity-0 group-hover:opacity-100">{rightIcon()}</ul>}
      </ul>
      {underLine && underLine}
    </>
  );
}

export function DropDownMobile({ item }) {
  const { id = "", title = "", rightIcon = () => {}, subList = [] } = item;
  const [expandedIds, updateIds] = useState([]);

  const handleClick = () => {
    if (expandedIds.includes(id)) {
      updateIds(() => expandedIds.filter((it) => it !== id));
    } else {
      updateIds([...expandedIds, id]);
    }
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={`flex items-center h-10 w-full cursor-pointer font-medium text-primary text-lg ${
          expandedIds.includes(id) && "expanded"
        }`}
      >
        <li className="flex-1">{title}</li>
        {rightIcon()}
      </ul>
      <div className={`body ${expandedIds.includes(id) && "expanded"}`}>
        <ul>
          {subList?.map((item) => (
            <li key={item.id} className="text-base cursor-pointer h-10 w-full font-normal text-primary">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function DropDownWeb({ item }) {
  const { title = "", subList = [] } = item;
  return (
    <>
      <ul>
        <li>{title}</li>
      </ul>
      <div className="body flex ">
        <div className="content">
          <div className="group-wrapper">
            {subList?.map((subItem) => (
              <WebSubItemDisplay key={subItem.id} item={subItem} />
            ))}
          </div>
          {item.subBody ? <div className="subContent">{item.subBody}</div> : null}
        </div>
      </div>
    </>
  );
}

export default function DropDown(props) {
  return (
    <>
      <div className="drop-down-mobile block lg:hidden">
        <DropDownMobile {...props} />
      </div>
      <div className="drop-down-web  hidden lg:block">
        <DropDownWeb {...props} />
      </div>
    </>
  );
}
