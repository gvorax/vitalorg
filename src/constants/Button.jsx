import React from "react";
import "./buttons.scss";

const Button = ({ title, color, setModal }) => {
  return (
    <button className={`button ${color}`} onClick={() => setModal(true)}>
      <div />
      <div />
      <span>{title}</span>
    </button>
  );
};

export default Button;
