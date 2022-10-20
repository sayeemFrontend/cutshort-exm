import React, { useEffect, useRef } from "react";
import Button from "../../../../components/basic/button/Button";
import { ReactComponent as Love } from "../../../../assets/icons/love2.svg";

export function IconStye({ children }) {
  return (
    <div className="w-10 h-10 cursor-pointer p p-3 rounded-lg bg-white flex items-center justify-center border border-[#e7e7e9] text-primary-dark">
      {children}
    </div>
  );
}

export default function UserSection({ user = {} }) {
  return (
    <div className="">
      <div className="left-part flex flex-row">
        <ul>
          <li className="mb-4 font-bold text-xl block lg:hidden">{user.heading || null}</li>
          <div className="flex items-center">
            <ul className="mr-4 w-16 h-16 rounded-full overflow-hidden">
              <img width="100%" height="auto" src={user.image || null} alt="user" />
            </ul>
            <div className="">
              <li className="text-base font-medium hidden lg:block">{user.heading}</li>
              <ul className="text-sm block lg:flex items-center  text-primary">
                <li className="mr-8 my-1 ">
                  <span className="text-primary-dark">{user.name || null}</span>
                </li>
                <ul className="flex items-center">
                  <li className="mr-8 list-none lg:list-disc">
                    <span className="text-primary-dark">Follow</span>
                  </li>
                  <li className="list-disc cursor-pointer">
                    <span className="text-secondary hover:opacity-70">Hire Me</span>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </ul>
        <ul className="ml-auto hidden lg:flex ">
          <Button className="mr-3 w-[70px] h-10 rounded-lg bg-[#f3f3f4] text-primary-dark" title="Save" />
          <Button className="w-20 h-10 rounded-lg  bg-secondary text-white" title="Like">
            <Love width="13px" className="mr-1" color="white" fill="white" />
          </Button>
        </ul>
      </div>
    </div>
  );
}
