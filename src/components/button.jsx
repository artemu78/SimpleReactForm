import React from "react";
import style from "./button.module.css";

function Button(props) {
  const { text, click } = props;
  return (
    <div className={style.button} onClick={click}>
      <span className={style.button_span}>{text}</span>
    </div>
  );
}

export default Button;
