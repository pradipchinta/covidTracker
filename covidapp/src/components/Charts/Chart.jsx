import React, { useEffect, useState } from "react";
import { fetchDailydata } from "../../api";
import { Line, Bar } from "react-chartjs-2";
const Chart = () => {
  const [dailydata, setdailydata] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setdailydata(await fetchDailydata());
    };
    console.log(dailydata);
    fetchAPI();
  });

  const lineChart = (
    <Line
      data={{
        label: "",
        datasets: [{}, {}],
      }}
    />
  );

  return <h1>Charts</h1>;
};

export default Chart;
