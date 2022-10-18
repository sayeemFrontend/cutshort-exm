import "./button.css";

import React from "react";

export default function Button(props) {
  const { style = {}, title = "", onClick = () => {}, className = "", children = null } = props;
  return (
    <div onClick={onClick} style={style} className={`button ${className}`}>
      {title}
      {children ? children : null}
    </div>
  );
}
