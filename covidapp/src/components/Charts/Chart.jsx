import React, { useEffect, useState } from "react";
import { fetchDailydata } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const Chart = () => {
  const [DailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailydata());
    };
    console.log(DailyData);

    fetchAPI();
  }, []);

  const data = {
    labels: DailyData.map(({ date }) => date),
    datasets: [
      {
        data: DailyData.map(({ confirmed }) => confirmed),
        label: "infected",
        borderColor: "#3333ff",
        fill: true,
        // borderWidth: 4,
      },
      {
        data: DailyData.map(({ deaths }) => deaths),
        label: "deaths",
        borderColor: "red",
        backgroundColor: "rgba(255,0,0,0.5)",
        fill: true,
        // borderWidth: 4,
      },
    ],
  };

  return <Line data={data} />;
};

export default Chart;
