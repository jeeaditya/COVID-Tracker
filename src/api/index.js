import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const response = await axios.get(changeableUrl);
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
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`);

    const modifiedData = response.data.map((daily) => ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${url}/countries`);
    const { countries } = response.data;

    //console.log(countries);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
