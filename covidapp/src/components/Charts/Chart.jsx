import React, { useEffect, useState } from "react";
import { fetchDailydata } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import Style from "./Chart.module.css";
const Chart = () => {
  const [dailydata, setdailydata] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setdailydata(await fetchDailydata());
    };
    // console.log(dailydata);
    fetchAPI();
  }, []);

  const lineChart = dailydata.length ? (
    <Line
      data={{
        label: dailydata.map(({ date }) => date),
        datasets: [
          {
            data: dailydata.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailydata.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return <div className={Style.container}>{lineChart}</div>;
};

export default Chart;
