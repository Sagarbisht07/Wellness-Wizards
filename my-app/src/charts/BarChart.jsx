import { Chart } from "react-google-charts";

export const data = [
  ["week", "workout", "calories", "gain"],
  ["week-1", 1000, 400, 100],
  ["week-2", 1170, 460, 250],
  ["week-3", 660, 1120, 300],
  ["week-4", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Youe Progress Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export default function BarChart() {
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
