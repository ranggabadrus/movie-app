export const subscribeMovie = payload => {
  console.log('movie action subscribe to movie with payload: ', payload);
  return {
    type: 'SUBS_MOVIE',
    payload,
  };
};

export const unsubscribeMovie = payload => ({
  type: 'UNSUBS_MOVIE',
  payload,
});

export const removeSubscribedMovie = payload => ({
  type: 'SUBS_MOVIE_REMOVE_BYID',
  payload,
});

export const clearState = () => ({
  type: 'CLEAR_MOVIE_STATE',
});
