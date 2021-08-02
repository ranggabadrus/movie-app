export const subscribeMovie = payload => ({
  type: 'SUBS_MOVIE',
  payload,
});

export const removeSubscribedMovie = payload => ({
  type: 'SUBS_MOVIE_REMOVE_BYID',
  payload,
});
