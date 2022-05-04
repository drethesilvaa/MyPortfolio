import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function App() {
  useEffect(() => {
    let chart = am5.Root.new("chartdiv");

    chart.setThemes([am5themes_Animated.new(chart)]);

    let series = chart.container.children.push(
      am5wc.WordCloud.new(chart, {
        categoryField: "tag",
        valueField: "weight",
        maxFontSize: am5.percent(15),
        colors: am5.ColorSet.new(chart, {
          colors: [
            am5.color(0x5aaa95),
            am5.color(0x86a873),
            am5.color(0xbb9f06),
            am5.color(0xe3e3e3),
          ],
        }),
      })
    );

    // setInterval(function () {
    //   am5.array.each(series.dataItems, function (dataItem) {
    //     let value = Math.random() * 65;
    //     value = value - Math.random() * value;
    //     dataItem.set("value", value);
    //     dataItem.set("valueWorking", value);
    //   });
    // }, 5000);

    series.data.setAll([
      { tag: "HTML/CSS", weight: 56.07 },
      { tag: "ASP.NET", weight: 48.24 },
      { tag: "C#", weight: 40 },
      { tag: "SQL", weight: 47.08 },
      { tag: "ReactJS", weight: 35.35 },
      { tag: "GIT", weight: 30.19 },
      { tag: "REST", weight: 10 },
      { tag: "Bash/Shell", weight: 12 },
      { tag: "C++", weight: 24.31 },
      { tag: "PHP", weight: 21.98 },
      { tag: "JSON", weight: 21.01 },
      { tag: "PowerShell", weight: 10.75 },
      { tag: "Bootstrap", weight: 17 },
      { tag: "SOAP", weight: 8.32 },
      { tag: "Wordpress", weight: 27 },
      { tag: "Sanity", weight: 20 },
      { tag: "Jquery", weight: 12 },
      { tag: "Umbraco", weight: 25 },
      { tag: "Visual Basic", weight: 35 },
      { tag: "Matlab", weight: 16 },
    ]);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}
