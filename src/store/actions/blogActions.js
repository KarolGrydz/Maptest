import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  CLEAR_TRIPS,
  CLEAR_SINGLE_TRIP,
  TRIP_ERROR,
  SEARCH_TRIP,
  SET_LOADING,
  SET_CURRENT_PAGE,
  SET_TRIPS_NUMBER,
  SET_PAGES,
  SET_SIDEBAR_TRIPS,
} from './types';

import axios from 'axios';
import { async, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

export const getTrips = (pageNr = 1, query = '') => async (dispatch) => {
  setLoading();

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
        dispatch({
          type: SET_TRIPS_NUMBER,
          payload: res.xhr.getResponseHeader('x-wp-total'),
        });
        dispatch({
          type: SET_PAGES,
          payload: res.xhr.getResponseHeader('x-wp-totalpages'),
        });
      },
      error: (err) => {
        dispatch({
          type: TRIP_ERROR,
          payload: err.message,
        });
      },
      complete: (comp) => console.log('Completed:' + comp),
    });
};

export const getSidebarTrips = () => async (dispatch) => {
  setLoading();

  ajax(`http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy`)
    .pipe(
      map((response) => response),
      catchError((error) => of(error)),
    )
    .subscribe({
      next: (res) => {
        dispatch({
          type: SET_SIDEBAR_TRIPS,
          payload: res.response,
        });
      },
      error: (err) => {
        dispatch({
          type: TRIP_ERROR,
          payload: err.message,
        });
      },
      complete: (comp) => console.log('Completed:' + comp),
    });
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
