const initialState = {
  userSubscribedMovie: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SUBS_MOVIE':
      console.log('user subscribe to movie: ', payload);
      const userSubscribe = [...state.userSubscribedMovie, payload];
      console.log('userSubs to save: ', userSubscribe);
      return {
        ...state,
        userSubscribedMovie: userSubscribe,
        userSubscribedMovieLastUpdate: Date.now(),
      };
    case 'UNSUBS_MOVIE':
      return {
        ...state,
        userSubscribedMovie: state.userSubscribedMovie.filter(
          item => payload != item.id,
        ),
        userSubscribedMovieLastUpdate: Date.now(),
      };

    default:
      return state;
  }
};
