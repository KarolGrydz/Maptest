import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  CLEAR_SINGLE_TRIP,
  CLEAR_TRIPS,
  SET_LOADING,
  TRIP_ERROR,
  SEARCH_TRIP,
} from './types';

import axios from 'axios';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

export const getTrips = (pageNr = 1, query = '') => async (dispatch) => {
  setLoading();

  // const res = await axios.get('http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy', {
  //   params: { search: query, page: pageNr },
  // });

  //Pytanie o paginacja + redux

  ajax(`http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy?search=${query}&page=${pageNr}`)
    .pipe(
      map((response) => response),
      catchError((error) => of(error)),
    )
    .subscribe({
      next: (res) => {
        dispatch({
          type: GET_TRIPS,
          payload: res.response,
        });
        console.log(res.xhr.getResponseHeader('x-wp-total'));
        console.log(res.xhr.getResponseHeader('x-wp-totalpages'));
      },
      error: (err) => {
        dispatch({
          type: TRIP_ERROR,
          payload: err.message,
        });
      },
      complete: (comp) => console.log('Completed:' + comp),
    });
  // dispatch({ type: GET_TRIPS, payload: res });
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
    type: CLEAR_SINGLE_TRIP,
  };
};

export const clearTrips = () => {
  return {
    type: CLEAR_TRIPS,
  };
};
