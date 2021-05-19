import React from "react";
import "./FloatingButton.css";

const FloatingButton = (props) => {
  return (
    <div className="custom-button" onClick={props.onClick}>
      +
    </div>
  );
};

export default FloatingButton;
