import axios from 'axios';

export interface FetchParams {
  query: string;
  fromDate: string;
  toDate: string;
};

const baseURL = 'https://newsapi.org/v2/everything?';
const apiKey = process.env.REACT_APP_NEWS_API;

export const fetchNewsData = async({
  query,
  fromDate,
  toDate
}: FetchParams) => {
  try {
    const res = await axios.get(
      `${baseURL}q=${query}&from=${fromDate}&to=${toDate}&sortBy=popularity&apiKey=${apiKey}`
    );

    return res.data.articles;
  } catch (err) {
    throw err;
  };
};