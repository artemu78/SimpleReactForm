import React, { useState, useEffect } from "react";
import style from "./textinput.module.css";

function Button(props) {
  const [isTextMode, setTextMode] = useState(false);
  const { text, forwardedRef } = props;

  useEffect(() => {if (isTextMode) forwardedRef.current.focus();})
  
  return (
    <div
      className={style.textinputContainer}
      onClick={() => {
        console.log('click');
        setTextMode(true);
      }} 
    >
      <div
        className={
          isTextMode ? style.textinputLabelSmall : style.textinputLabelBig
        }
      >
        {text}
      </div>
      <input
        type="text"
        ref={forwardedRef}
        onBlur={(e) => {
          console.log('blur');
          e.stopPropagation();
          setTextMode(!isTextMode || forwardedRef.current.value);
        }}
        className={
          isTextMode
            ? style.textinputControlVisible
            : style.textinputControlHidden
        }
      />
    </div>
  );
}

export default Button;
