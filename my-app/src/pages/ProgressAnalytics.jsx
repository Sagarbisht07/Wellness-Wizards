import BarChart from "../charts/BarChart";
import HollowBarChart from "../charts/HollowBarChart";
import PieChart from "../charts/PieChart";
import LineChart from "../charts/lineChart";
import { Statistic } from "../components/Statistics";
import { Statistic02 } from "../components/Statistics02";
import { Statistic03 } from "../components/Statistics03";
import { Statistic04 } from "../components/Statistics04";

const ProgressAnalytics = () => {
  return (
    <div>
      <div
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <PieChart />
        <div
          style={{
            overflow: "-moz-hidden-unscrollable",
            marginTop: "-5%",
          }}
        >
          <Statistic />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <BarChart />
        </div>
        <div>
          <Statistic02 />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div
        style={{
          padding: "10px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <HollowBarChart />
        <Statistic03 />
      </div>

      <br />
      <hr />
      <br />
      <div
        style={{
          padding: "10px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <LineChart />
        <Statistic04 />
      </div>
    </div>
  );
};

export default ProgressAnalytics;
