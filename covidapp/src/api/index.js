import axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const fetchDailydata = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate,
    }));
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchdata = async () => {
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(url);
    return { confirmed, deaths, recovered, lastUpdate };
  } catch (err) {}
};
