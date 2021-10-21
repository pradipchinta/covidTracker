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
    const { data } = axios.get(`${url}/daily`);
    console.log(data);
  } catch (err) {}
};
