import React from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5wc from "@amcharts/amcharts5/wc";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import "../stylesheets/myinfo.css";

export default function App(props) {
  const backgroundImage = {
    "background-image": "url(" + props.userImage + ")  ",
  };

  return (
    <div class="card card0" style={backgroundImage}>
      <div class="border">
        <h2>{props.userName}</h2>
        <div class="skills fa">
          <div class="skills-bar">
            <div class="bar">
              <div class="info">
                <span>HTML</span>
              </div>
              <div class="progress-line">
                <span class="html"></span>
              </div>
              <div class="bar">
                <div class="info">
                  <span>CSS</span>
                </div>
                <div class="progress-line">
                  <span class="css"></span>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>BOOTSTRAP</span>
                  </div>
                  <div class="progress-line">
                    <span class="bootstrap"></span>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>JAVASCRIPT</span>
                    </div>
                    <div class="progress-line">
                      <span class="javascript"></span>
                    </div>
                    <div class="bar">
                      <div class="info">
                        <span>C PROGRAMMING</span>
                      </div>
                      <div class="progress-line">
                        <span class="c"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
