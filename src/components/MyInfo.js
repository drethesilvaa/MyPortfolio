import React from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5wc from "@amcharts/amcharts5/wc";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import "../stylesheets/StyleMyInfo.js";
import { MdAdsClick } from "react-icons/md";
import { StyleMyInfo } from "../stylesheets/StyleMyInfo";

export default function App(props) {
  const backgroundImage = {
    backgroundImage: "url(" + props.userImage + ")  ",
  };

  return (
    <div className="card card0" style={backgroundImage}>
      <StyleMyInfo></StyleMyInfo>
      <div className="border">
        <MdAdsClick className="icon"></MdAdsClick>
        {/* <h2>{props.userName}</h2> */}
        <div className="skills fa">
          <div className="skills-bar">
            {props.userSkills.map((skill, index) => {
              return (
                <div key={index} className="bar">
                  <div className="info">
                    <span>{skill.skill}</span>
                  </div>
                  <div className="progress-line">
                    <span
                      style={{ "--my-var": "" + skill.skill_Level + "%" }}
                      className="html"
                    ></span>
                  </div>
                </div>
              );
            })}

            {/* <div className="bar">
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line">
                <span className="css"></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>BOOTSTRAP</span>
              </div>
              <div className="progress-line">
                <span className="bootstrap"></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>JAVASCRIPT</span>
              </div>
              <div className="progress-line">
                <span className="javascript"></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>C PROGRAMMING</span>
              </div>
              <div className="progress-line">
                <span className="c"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
