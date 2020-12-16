import axios from 'axios';

export const searchTrip = async (pageNr = 1, query = '') => {
  const res = await axios.get('http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy', {
    params: { search: query, page: pageNr },
  });

  return res;
};

export const getSingleTrip = async (id) => {
  const res = await axios.get(`https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy/${id}`);
  return res;
};

export const updatedTrips = (data, headers, trips) => {
  const all = data;
  const count = headers['x-wp-total'];
  const pages = headers['x-wp-totalpages'];

  return {
    ...trips, all, count, pages,
  };
};
