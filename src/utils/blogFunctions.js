import { ajax } from 'rxjs/ajax';
import axios from 'axios';

export const getTrips = async (pageNr = 1) => {
  const res = await axios.get('http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy', {
    params: { page: pageNr },
  });

  return res;

  // dispatch({
  //   type: GET_TRIPS,
  //   payload: res.data,
  // });

  // updatePaginationPage(pageNr);

  // if (!sidebar.length) getSidebarTrips(res.data);
};

// const getSingleTrip = async (id) => {
//   const res = await axios.get(`https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy/${id}`);
// };
