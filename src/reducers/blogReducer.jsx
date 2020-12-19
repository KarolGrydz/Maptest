import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  CLEAR_TRIPS,
  CLEAR_SINGLE_TRIP,
  TRIP_ERROR,
  SEARCH_TRIP,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  trips: [],
  singleTrip: [],
  pages: 0,
  currentPage: 1,
  tripsNumber: 0,
  search: '',
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIPS:
      return {
        ...state,
        trips: action.payload,
        loading: true,
      };

    case GET_SINGLE_TRIP:
      return {
        ...state,
        singleTrip: action.payload,
        loading: true,
      };

    case SEARCH_TRIP:
      return {
        ...state,
        search: action.payload,
      };

    case CLEAR_TRIPS:
      return {
        ...state,
        trips: null,
      };

    case CLEAR_SINGLE_TRIP:
      return {
        ...state,
        singleTrip: null,
      };

    case TRIP_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
