import { createSelector } from 'reselect';

const allTrips = (state) => state.blog.trips;
const allPostNumber = (state) => state.blog.tripsNumber;
const allPagesNumber = (state) => state.blog.pages;

export const selectAllTitles = createSelector(allTrips, (trips) =>
  trips.map((trip) => {
    return {
      id: trip.id,
      title: trip.title.rendered,
      date: trip.date,
      content: trip.content.rendered,
    };
  }),
);

export const selectAllPostNumber = createSelector(allPostNumber, (tripsNumber) =>
  Number(tripsNumber),
);

export const selectAllPagesNumber = createSelector(allPagesNumber, (pages) => Number(pages));
