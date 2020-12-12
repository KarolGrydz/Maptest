import axios from 'axios';

//api

export const searchTrip = async (pageNr = 1, query = '') => {
  const res = await axios.get('http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy', {
    params: { search: query, page: pageNr },
  });

  return res;
};

// const getSingleTrip = async (id) => {
//   const res = await axios.get(`https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy/${id}`);
// };

// helpery

export const updatedTrips = (data, headers, trips) => {
  const all = data;
  const count = headers['x-wp-total'];
  const pages = headers['x-wp-totalpages'];

  trips = { ...trips, all, count, pages };

  if (!Boolean(trips.count)) trips = { ...trips, count };
  if (!Boolean(trips.pages))
    trips = {
      ...trips,
      pages,
    };

  return trips;
};