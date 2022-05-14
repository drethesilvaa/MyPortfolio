import React, { useState } from "react";
import "../stylesheets/lighsaber.css";

export default function Lighsaber(props) {
  //   const [saber, setSaber] = useState({
  //     color: props.color,
  //     angle: props.angle,
  //   });

  console.log(props);

  const [checked, setChecked] = useState(true);

  const rotatestyle = {
    transform: "rotateZ(" + props.angle + "deg)",
  };

  return (
    <div class="example-item">
      <div class="lightsaber" style={rotatestyle}>
        <label htmlFor={props.color + "-example"}></label>
        <input
          type="checkbox"
          id={props.color + "-example"}
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        ></input>
        <div class="switch"></div>
        <div class={"plasma " + props.color}></div>
      </div>
    </div>
  );
}
