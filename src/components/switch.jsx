import React, { useState } from "react";
import style from "./switch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

function Switch(props) {
  const [switchState, setSwitchState] = useState(false);
  const { text, forwardedRef } = props;
  return (
    <div>
      <label htmlFor="switch_subscribe">
        <div className={style.switchContainer}>
          <div className={switchState ? style.toggleOn : style.toggleOff}>
            <FontAwesomeIcon icon={faToggleOn} />
          </div>
          <div className={style.switchText}><span className={style.switchTextInner}>{text}</span></div>
        </div>
      </label>

      <input
        onChange={(e) => setSwitchState(e.target.checked)}
        id="switch_subscribe"
        type="checkbox"
        ref={forwardedRef}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default Switch;
