const returnTrip = (trip) => ({
  id: trip.id,
  title: trip.title.rendered,
  date: trip.date,
  content: trip.content.rendered,
  featured_media: trip.featured_media,
  image: trip.image,
});

export default returnTrip;
