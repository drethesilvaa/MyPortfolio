import React, { useState } from "react";
import "../stylesheets/lighsaber.css";

export default function Lighsaber(props) {
  //   const [saber, setSaber] = useState({
  //     color: props.color,
  //     angle: props.angle,
  //   });

  const [checked, setChecked] = useState(true);

  const rotatestyle = {
    transform: "rotateZ(" + props.angle + "deg)",
  };

  return (
    <div className="example-item">
      <div className="lightsaber" style={rotatestyle}>
        <label htmlFor={props.color + "-example"}></label>
        <input
          type="checkbox"
          id={props.color + "-example"}
          defaultChecked={true}
          onChange={() => setChecked(!checked)}
        ></input>
        <div className="switch"></div>
        <div className={"plasma " + props.color}></div>
      </div>
    </div>
  );
}
