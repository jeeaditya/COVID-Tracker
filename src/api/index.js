import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = response;
    const cleanData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return cleanData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`);

    console.log(response.data);
  } catch (error) {}
};
