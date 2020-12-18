import { createSelector } from 'reselect';

const selectAllTrips = (state) => state.blog.trips;

export const selectAllTitles = createSelector(selectAllTrips, (trips) =>
  trips.map((trip) => {
    return {
      id: trip.id,
      title: trip.title.rendered,
      date: trip.date,
      content: trip.content.rendered,
    };
  }),
);
