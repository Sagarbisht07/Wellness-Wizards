import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Day", "Workout", "Calories", "Growth"],
  [1, 30, 800, 4.4],
  [2, 25, 700, 5.6],
  [3, 20, 600, 5],
  [4, 15, 500, 5.5],
  [5, 10, 400, 6.6],
  [6, 5, 300, 10],
  [7, 0, 200, 0],
];

export const options = {
  chart: {
    title: "Workout, Calories and gain",
    subtitle: "in millions of dollars (USD)",
  },
};

export default function LineChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
