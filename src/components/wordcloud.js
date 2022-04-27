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
            am5.color(0x095256),
            am5.color(0x087f8c),
            am5.color(0x5aaa95),
            am5.color(0x86a873),
            am5.color(0xbb9f06),
          ],
        }),
      })
    );

    setInterval(function () {
      am5.array.each(series.dataItems, function (dataItem) {
        let value = Math.random() * 65;
        value = value - Math.random() * value;
        dataItem.set("value", value);
        dataItem.set("valueWorking", value);
      });
    }, 5000);

    series.data.setAll([
      { tag: "JavaScript", weight: 64.96 },
      { tag: "HTML/CSS", weight: 56.07 },
      { tag: "Python", weight: 48.24 },
      { tag: "SQL", weight: 47.08 },
      { tag: "Java", weight: 35.35 },
      { tag: "Node.js", weight: 33.91 },
      { tag: "TypeScript", weight: 30.19 },
      { tag: "C#", weight: 27.86 },
      { tag: "Bash/Shell", weight: 27.13 },
      { tag: "C++", weight: 24.31 },
      { tag: "PHP", weight: 21.98 },
      { tag: "C", weight: 21.01 },
      { tag: "PowerShell", weight: 10.75 },
      { tag: "Go", weight: 9.55 },
      { tag: "Kotlin", weight: 8.32 },
      { tag: "Rust", weight: 7.03 },
      { tag: "Ruby", weight: 6.75 },
      { tag: "Dart", weight: 6.02 },
      { tag: "Assembly", weight: 5.61 },
      { tag: "Swift", weight: 5.1 },
      { tag: "R", weight: 5.07 },
      { tag: "VBA", weight: 4.66 },
      { tag: "Matlab", weight: 4.66 },
      { tag: "Groovy", weight: 3.01 },
      { tag: "Objective-C", weight: 2.8 },
      { tag: "Scala", weight: 2.6 },
      { tag: "Perl", weight: 2.46 },
      { tag: "Haskell", weight: 2.12 },
      { tag: "Delphi", weight: 2.1 },
      { tag: "Clojure", weight: 1.88 },
      { tag: "Elixir", weight: 1.74 },
      { tag: "LISP", weight: 1.33 },
      { tag: "Julia", weight: 1.29 },
      { tag: "F#", weight: 0.97 },
      { tag: "Erlang", weight: 0.79 },
      { tag: "APL", weight: 0.65 },
      { tag: "Crystal", weight: 0.56 },
      { tag: "COBOL", weight: 0.53 },
    ]);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}
