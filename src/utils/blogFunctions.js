const initialState = {
  news: [],
  singleNews: [],
  pageNr: 1,
  sidebarNews: [],
  numberOfAllPosts: 0,
  numberOfAllPages: 0,
};

const getTrips = async (gotNumbers = true, pageNr = 1, sidebar) => {
  console.log(gotNumbers, pageNr, Boolean(sidebar.length), sidebar);
  const res = await axios.get('https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy', {
    params: { page: pageNr },
  });

  dispatch({
    type: GET_TRIPS,
    payload: res.data,
  });

  updatePaginationPage(pageNr);

  if (!sidebar.length) getSidebarTrips(res.data);

  if (!gotNumbers) {
    addNumberOfAllPosts(res.headers['x-wp-total']);
    addNumberOfAllPages(res.headers['x-wp-totalpages']);
  }
};

const getSingleTrip = async (id) => {
  const res = await axios.get(`https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy/${id}`);
};
