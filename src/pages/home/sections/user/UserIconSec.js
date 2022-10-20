import React, { useEffect, useRef } from "react";

import { ReactComponent as Love } from "../../../../assets/icons/love2.svg";
import { ReactComponent as Save } from "../../../../assets/icons/plusBack.svg";
import { ReactComponent as Forward } from "../../../../assets/icons/forward.svg";
import { ReactComponent as Massage } from "../../../../assets/icons/massage.svg";
import { ReactComponent as Error } from "../../../../assets/icons/error.svg";

export function Tooltip({ heading }) {
  return (
    <div className="tooltip ">
      <p className="z-[99] w-full">{heading}</p>
    </div>
  );
}

export function IconStye({ children, badge = false }) {
  return (
    <div className="w-10 h-10  cursor-pointer p p-3 rounded-lg bg-white flex items-center justify-center border border-[#e7e7e9] text-primary-dark">
      {children}
      {badge ? (
        <span className="w-4 h-4 font-semibold flex items-center justify-center text-primary text-[10px] translate-x-[34%] -translate-y-[34%] rounded-full border border-primary-light bg-white absolute top-0 right-0">
          11
        </span>
      ) : null}
    </div>
  );
}

export default function UserIconSec({ user = {} }) {
  const userIconRef = useRef();

  const scrollEvent = () => {
    const { scrollTop, clientWidth } = document.documentElement;
    if (userIconRef.current) {
      if (clientWidth > 1024) {
        if (scrollTop > 100) {
          userIconRef.current.style.position = "fixed";
          userIconRef.current.style.top = "60px";
        } else {
          userIconRef.current.style.position = "absolute";
          userIconRef.current.style.top = "120px";
        }
      } else {
        userIconRef.current.style.position = "relative";
        userIconRef.current.style.top = "0";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    window.addEventListener("resize", scrollEvent);
  }, []);

  return (
    <div
      ref={userIconRef}
      className="right-part flex flex-row lg:flex-col-reverse lg:absolute lg:top-[140px] lg:right-10"
    >
      <ul className="lg:mt-3 flex w-[90px] lg:w-max justify-between flex-row lg:flex-col lg:h-[90px]">
        <li className="relative parent">
          <IconStye>
            <Save />
          </IconStye>
          <Tooltip heading="Save" />
        </li>
        <li className="relative parent">
          <IconStye>
            <Love color="black" fill="black" stroke="black" />
          </IconStye>
          <Tooltip heading="Like" />
        </li>
      </ul>
      <ul className="ml-auto lg:ml-0 flex w-[140px] lg:w-max justify-between flex-row lg:flex-col lg:h-[140px]">
        <li className="lg:order-1 relative parent">
          <IconStye>
            <Forward />
          </IconStye>
          <Tooltip heading="Share" />
        </li>
        <li className="relative parent">
          <IconStye badge>
            <Massage />
          </IconStye>
          <Tooltip heading="Feedback" />
        </li>
        <li className="lg:order-2 relative parent">
          <IconStye>
            <Error />
          </IconStye>
          <Tooltip heading="Short details" />
        </li>
      </ul>
      <ul className="mb-3 w-10 h-10 rounded-full overflow-hidden hidden lg:inline">
        <img width="100%" height="auto" src={user.image || null} alt="user" />
      </ul>
    </div>
  );
}
