import React from "react";
import "./TextSlice.scss";

function TextSlice(props) {
  return (
    <div className="textSlice">
      <span className="text">{props.text}</span>
    </div>
  );
}

export default TextSlice;
