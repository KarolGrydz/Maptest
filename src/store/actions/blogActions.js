import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import contentFilter from '../../utils/contentFilter';
import { posts, media } from '../../constants/apiUrls';

import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  GET_SINGLE_GALLERY,
  GET_FRONT_POSTS,
  GET_FRONT_ATTACHMENT,
  CLEAR_TRIPS,
  CLEAR_SINGLE_TRIP,
  CLEAR_FRONT_TRIPS,
  TRIP_ERROR,
  SEARCH_TRIP,
  SET_LOADING,
  SET_CURRENT_PAGE,
  SET_TRIPS_NUMBER,
  SET_PAGES,
  SET_SIDEBAR_TRIPS,
  SET_VIEW,
} from './types';

export const setCurrentPage = (event) => ({
  type: SET_CURRENT_PAGE,
  payload: event,
});

export const searchTrip = (event) => ({ type: SEARCH_TRIP, payload: event });

export const setLoading = () => ({ type: SET_LOADING });

export const clearCurrentTrip = () => ({ type: CLEAR_SINGLE_TRIP });

export const clearTrips = () => ({ type: CLEAR_TRIPS });

export const clearFrontTrips = () => ({ type: CLEAR_FRONT_TRIPS });

export const setView = (event) => ({ type: SET_VIEW, payload: event });

export const getPosts = (pageNr = 1, query = '') => async (dispatch) => {
  ajax(`${posts}?search=${query}&page=${pageNr}`)
    .pipe(
      map((response) => response),
      catchError((error) => of(error))
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
  ajax(`${posts}/${id}`)
    .pipe(
      map((response) => response),
      catchError((error) => of(error))
    )
    .subscribe({
      next: (res) => {
        const data = contentFilter(res);
        dispatch({
          type: GET_SINGLE_TRIP,
          payload: data,
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

//test obrazków
export const getSingleGallery = (id) => async (dispatch) => {
  ajax(
    `${media}?orderby=title&order=asc&per_page=100&parent=${id}`
  )
    .pipe(
      map((response) => response),
      catchError((error) => of(error))
    )
    .subscribe({
      next: (res) => {
        dispatch({
          type: GET_SINGLE_GALLERY,
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
  ajax(posts)
    .pipe(
      map((response) => response),
      catchError((error) => of(error))
    )
    .subscribe({
      next: (res) => {
        dispatch({
          type: SET_SIDEBAR_TRIPS,
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

export const getFrontPosts = () => async (dispatch) => {
  ajax(posts)
    .pipe(
      map((response) => response),
      catchError((error) => of(error))
    )
    .subscribe({
      next: (res) => {
        const data = res.response.slice(0, 2);
        dispatch({
          type: GET_FRONT_POSTS,
          payload: data,
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

export const getFrontAttachment = (id) => async (dispatch) => {
  if (id !== 0) {
    ajax(`${media}/${id}`)
      .pipe(
        map((response) => response),
        catchError((error) => of(error))
      )
      .subscribe({
        next: (res) => {
          const data = { id: res.response.id, image: res.response.source_url };
          // console.log(res.xhr.getResponseHeader('x-wp-total'));

          dispatch({
            type: GET_FRONT_ATTACHMENT,
            payload: data,
          });
        },
        error: (err) => {
          dispatch({
            type: TRIP_ERROR,
            payload: err.message,
          });
        },
      });
  }
};
