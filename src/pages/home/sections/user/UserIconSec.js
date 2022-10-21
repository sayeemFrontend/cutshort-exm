import React, { useEffect, useRef } from "react";

import { ReactComponent as Love } from "../../../../assets/icons/love2.svg";
import { ReactComponent as Save } from "../../../../assets/icons/plusBack.svg";
import { ReactComponent as Forward } from "../../../../assets/icons/forward.svg";
import { ReactComponent as Massage } from "../../../../assets/icons/massage.svg";
import { ReactComponent as Error } from "../../../../assets/icons/error.svg";
import Tooltip from "../../../../components/common/tooltip/Tooltip";
import IconStye from "../../../../components/common/icon-style/IconStyle";

export default function UserIconSec({ user = {} }) {
  const userIconRef = useRef();

  const scrollEvent = () => {
    const { scrollTop, clientWidth } = document.documentElement;
    if (userIconRef.current) {
      if (clientWidth > 1024) {
        if (scrollTop > 140) {
          userIconRef.current.style.display = "inline-flex";
          userIconRef.current.style.opacity = "1";
          userIconRef.current.style.visibility = "visible";

          userIconRef.current.style.transition = "all .2s ease-in-out";
        } else {
          userIconRef.current.style.opacity = "0";
          userIconRef.current.style.visibility = "collapse";

          userIconRef.current.style.transition = "all .2s ease-in-out";
        }
      } else {
        window.removeEventListener("scroll", scrollEvent);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
  });

  return (
    <div className="right-part flex flex-row lg:flex-col-reverse">
      <ul
        ref={userIconRef}
        className="lg:mt-3 flex w-[90px] lg:hidden lg:w-max justify-between flex-row lg:flex-col lg:h-[90px]"
      >
        <li className=" parent">
          <IconStye style={{ padding: "12px" }}>
            <Save />
          </IconStye>
          <Tooltip heading="Save" />
        </li>
        <li className=" parent">
          <IconStye style={{ padding: "12px" }}>
            <Love color="black" fill="black" stroke="black" />
          </IconStye>
          <Tooltip heading="Like" />
        </li>
      </ul>
      <ul className="ml-auto lg:ml-0 flex w-[140px] lg:w-max justify-between flex-row lg:flex-col lg:h-[140px]">
        <li className="lg:order-1 relative parent">
          <IconStye style={{ padding: "12px" }}>
            <Forward />
          </IconStye>
          <Tooltip heading="Share" />
        </li>
        <li className="parent">
          <IconStye style={{ padding: "12px" }} badge>
            <Massage />
          </IconStye>
          <Tooltip heading="Feedback" />
        </li>
        <li className="lg:order-2 parent">
          <IconStye style={{ padding: "12px" }}>
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
