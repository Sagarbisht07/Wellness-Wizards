import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "Meditation", "Stress Level", "Emotional Level"],
  [1, 37.8, 80.8, 10],
  [2, 30.9, 69.5, 13],
  [3, 25.4, 57, 15],
  [4, 11.7, 40, 23],
  [5, 11.9, 23, 25],
  [6, 8.8, 25, 25],
  [7, 7.6, 12.3, 26],
  [8, 12.3, 29.2, 27],
  [9, 16.9, 20, 28],
  [10, 12.8, 30.9, 28],
  [11, 5.3, 7.9, 28],
  [12, 6.6, 8.4, 28],
  [13, 4.8, 6.3, 23],
  [14, 4.2, 6.2, 20],
];

export const options = {
  chart: {
    title: "Relationship between stress level, meditation and emotional level",
  },
};

export default function LineChart() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
