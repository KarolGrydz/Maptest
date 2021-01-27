import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

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
  SET_VIEW,
} from './types';

export const setCurrentPage = (event) => ({ type: SET_CURRENT_PAGE, payload: event });

export const searchTrip = (event) => ({ type: SEARCH_TRIP, payload: event });

export const setLoading = () => ({ type: SET_LOADING });

export const clearCurrentTrip = () => ({ type: CLEAR_SINGLE_TRIP });

export const clearTrips = () => ({ type: CLEAR_TRIPS });

export const setView = (event) => ({ type: SET_VIEW, payload: event });

export const getPosts = (pageNr = 1, query = '') => async (dispatch) => {
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
    });
};

export const getSinglePost = (id) => async (dispatch) => {
  setLoading();

  ajax(`http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy/${id}`)
    .pipe(
      map((response) => response),
      catchError((error) => of(error)),
    )
    .subscribe({
      next: (res) => {
        dispatch({
          type: GET_SINGLE_TRIP,
          payload: res.response,
        });
      },
      error: (err) => {
        dispatch({
          type: TRIP_ERROR,
          payload: err.message,
        });
      },
    });
};

export const getSidebarPosts = () => async (dispatch) => {
  setLoading();

  ajax('http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy')
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
    });
};
