import React from "react";
export default function Modal({ children = null, onClose = () => {} }) {
  return (
    <div className="modal px-4 py-4 z-50 lg:hidden w-full min-h-screen h-[1600px]  absolute left-0 top-[72px]">
      <div>{children}</div>
    </div>
  );
}
