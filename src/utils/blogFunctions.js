import { ajax } from 'rxjs/ajax';
import axios from 'axios';

export const getTrips = async (pageNr = 1) => {
  const res = await axios.get('http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy', {
    params: { page: pageNr },
  });

  return res;
};

export const searchTrip = async (query) => {
  const res = await axios.get('http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy', {
    params: { search: query },
  });

  return res;
};

// const getSingleTrip = async (id) => {
//   const res = await axios.get(`https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy/${id}`);
// };
