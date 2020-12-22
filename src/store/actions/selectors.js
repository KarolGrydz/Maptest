import { createSelector } from 'reselect';

const trips = (state) => state.blog.trips;
const singleTrip = (state) => state.blog.singleTrip;
const sidebarTrips = (state) => state.blog.sidebarTrips;
const pages = (state) => state.blog.pages;
const currentPage = (state) => state.blog.currentPage;
const tripsNumber = (state) => state.blog.tripsNumber;
const search = (state) => state.blog.search;
const isLoading = (state) => state.blog.isLoading;
const error = (state) => state.blog.error;

export const selectTrips = createSelector(trips, (trips) => trips.map((trip) => returnTrip(trip)));

export const selectSingleTrip = createSelector(singleTrip, (trip) => returnTrip(trip));

export const selectSidebarTrips = createSelector(sidebarTrips, (trips) =>
  trips.map((trip) => returnTrip(trip)),
);

export const selectAllPagesNumber = createSelector(pages, (pages) => Number(pages));

export const selectCurrentPage = createSelector(currentPage, (currentPage) => Number(currentPage));

export const selectAllPostNumber = createSelector(tripsNumber, (tripsNumber) =>
  Number(tripsNumber),
);

export const selectSearch = createSelector(search, (search) => toString(search));

export const selectLoading = createSelector(isLoading, (isLoading) => isLoading);

export const selectError = createSelector(error, (err) => err);

const returnTrip = (trip) => {
  return {
    id: trip.id,
    title: trip.title.rendered,
    date: trip.date,
    content: trip.content.rendered,
  };
};
