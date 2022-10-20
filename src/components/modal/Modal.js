import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ children = null, onClose = () => {} }) {
  const portal = (
    <div className="modal bg-white z-50 w-screen h-screen fixed left-0 top-0">
      <div>{children}</div>
    </div>
  );
  return ReactDOM.createPortal(portal, document.getElementById("root"));
}
