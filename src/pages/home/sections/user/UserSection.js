import React from "react";
import userImage from "../../../../assets/images/man.webp";
import { ReactComponent as Love } from "../../../../assets/icons/love2.svg";
import { ReactComponent as Save } from "../../../../assets/icons/plusBack.svg";
import { ReactComponent as Forward } from "../../../../assets/icons/forward.svg";
import { ReactComponent as Massage } from "../../../../assets/icons/massage.svg";
import { ReactComponent as Error } from "../../../../assets/icons/error.svg";

const user = {
  id: 1,
  name: "Eren ツ",
  heading: "Onboarding #Exploration",
  image: userImage,
};

export function IconStye({ children }) {
  return (
    <div className="w-10 h-10 cursor-pointer p p-3 rounded-lg bg-white flex items-center justify-center border border-[#e7e7e9] text-primary-dark">
      {children}
    </div>
  );
}
export default function UserSection() {
  return (
    <div>
      <div className="left-part">
        <li className="mb-4 font-bold text-xl block lg:hidden">{user.heading}</li>
        <div className="flex items-center">
          <ul className="mr-4 w-16 h-16 rounded-full overflow-hidden">
            <img width="100%" height="auto" src={user.image} alt="user" />
          </ul>
          <div className="">
            <li className="text-base font-medium hidden lg:block">{user.heading}</li>
            <ul className="text-sm block lg:flex items-center  text-primary">
              <li className="mr-8 my-1 ">
                <span className="text-primary-dark">{user.name}</span>
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
      </div>
      <div className="right-part flex items-center justify-between">
        <ul className="flex w-[90px] justify-between">
          <li>
            <IconStye>
              <Save />
            </IconStye>
          </li>
          <li>
            <IconStye>
              <Love color="black" fill="black" stroke="black" />
            </IconStye>
          </li>
        </ul>
        <ul className="ml-auto flex w-[140px] justify-between">
          <li>
            <IconStye>
              <Forward />
            </IconStye>
          </li>
          <li>
            <IconStye>
              <Massage />
            </IconStye>
          </li>
          <li>
            <IconStye>
              <Error />
            </IconStye>
          </li>
        </ul>
      </div>
    </div>
  );
}
