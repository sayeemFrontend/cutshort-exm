import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({ children = null, onClose = () => {} }) {
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth > 1023) {
        onClose();
      }
    });
  });
  const portal = (
    <div className="modal bg-white z-50 w-screen h-screen fixed left-0 top-0">
      <div>{children}</div>
    </div>
  );
  return ReactDOM.createPortal(portal, document.getElementById("root"));
}
