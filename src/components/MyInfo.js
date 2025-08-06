import React from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5wc from "@amcharts/amcharts5/wc";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import "../stylesheets/StyleMyInfo.js";
import { MdAdsClick } from "react-icons/md";
import { StyleMyInfo } from "../stylesheets/StyleMyInfo";

export default function MyInfo(props) {
  const backgroundImage = {
    backgroundImage: "url(" + props.userImage + ")  ",
  };

  return (
    <div className="card card0" style={backgroundImage}>
      <StyleMyInfo></StyleMyInfo>
    </div>
  );
}
