import React from "react";
import Button from "../../../../components/basic/button/Button";
import { ReactComponent as Mail } from "../../../../assets/icons/mail.svg";

export default function UserHire({ user }) {
  return (
    <>
      <div className="mb-6 flex items-center ">
        <span className="flex-1 h-[2px] bg-primary-light opacity-30"></span>
        <div className="mx-5 w-16 h-16 rounded-full overflow-hidden">
          <img width="100%" height="auto" src={user.image || null} alt="user" />
        </div>
        <span className="flex-1 h-[2px] bg-primary-light opacity-30"></span>
      </div>

      <div className="mb-4 text-center">
        <li className="mb-2 font-medium text-xl ">{user.name && user.name}</li>
        <p className="text-sm text-primary-dark">let's create something amazing together →</p>
      </div>

      <Button className="mx-auto w-[100px] h-10 rounded-lg  bg-secondary hover:opacity-80 text-white" title="Hire Me">
        <Mail width="13px" className="mr-1" color="white" fill="white" />
      </Button>
    </>
  );
}
