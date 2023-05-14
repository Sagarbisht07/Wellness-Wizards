import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["stage", "Minutes "],
  ["NERM-1", 20],
  ["NERM-2", 30],
  ["NERM-3", 60],
  ["NERM-4", 60],
  ["REM", 90], // CSS-style declaration
];

export const options = {
  title: "Stages in the Sleep cycle",
  pieHole: 0.3,
  is3D: false,
};

export default function HollowBarChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
