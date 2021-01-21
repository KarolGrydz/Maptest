const returnTrip = (trip) => ({
  id: trip.id,
  title: trip.title.rendered,
  date: trip.date,
  content: trip.content.rendered,
});

export default returnTrip;
