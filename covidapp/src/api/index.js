import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchdata = async () => {
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(url);
    return { confirmed, deaths, recovered, lastUpdate };
  } catch (err) {}
};

export const fetchDailydata = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    // console.log(data);
    const modifiedData = data.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate,
    }));

    return modifiedData;
  } catch (err) {}
};
