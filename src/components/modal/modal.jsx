import ReactDom from "react-dom";
import React from "react";

export const Modal = props => {
  return ReactDom.createPortal(
    props.children,
    document.querySelector("#modal")
  );
};
