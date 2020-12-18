import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  CLEAR_CURRENT_TRIP,
  CLEAR_TRIPS,
  SET_LOADING,
  TRIP_ERROR,
  SEARCH_TRIP,
} from './types';

import axios from 'axios';

export const getTrips = (pageNr = 1, query = '') => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get('http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy', {
      params: { search: query, page: pageNr },
    });

    dispatch({ type: GET_TRIPS, payload: res });
  } catch (error) {
    dispatch({
      type: TRIP_ERROR,
      payload: error.response.statusText,
    });
  }
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const searchTrip = (pageNr = 1, query = '') => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get('http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy', {
      params: { search: query, page: pageNr },
    });

    dispatch({ type: SEARCH_TRIP, payload: res });
  } catch (error) {
    dispatch({
      type: TRIP_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const getSingleTrip = (trip) => {
  return {
    type: GET_SINGLE_TRIP,
    payload: trip,
  };
};

export const clearCurrentTrip = () => {
  return {
    type: CLEAR_CURRENT_TRIP,
  };
};

export const clearTrips = () => {
  return {
    type: CLEAR_TRIPS,
  };
};
