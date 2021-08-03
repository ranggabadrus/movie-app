const initialState = {
  userSubscribedMovie: [],
  bookmarkMovie: [],
};

export default (state = initialState, {type, payload}) => {
  console.log('triggered with type: ', type);
  switch (type) {
    case 'ADD_BOOKMARK':
      console.log('action ', payload);
      return {
        ...state,
        bookmarkMovie: [...state.bookmarkMovie, payload],
      };
    case 'DELETE_BOOKMARK':
      return {
        ...state,
        bookmarkMovie: state.bookmarkMovie.filter(
          foo => foo._id !== payload._id,
        ),
      };

    case 'SUBS_MOVIE':
      console.log(
        'user',
        payload.userID,
        ' subscribe to movie: ',
        payload.movie._id,
      );
      const allMovieSubs = state.userSubscribedMovie;
      // console.log('all user subscribe state: ', allMovieSubs);
      if (allMovieSubs == null) {
        const userSubscribe = {
          userID: payload.userID,
          subscribedMovie: [payload.movie],
        };
        return {
          ...state,
          userSubscribedMovie: [...state.userSubscribedMovie, userSubscribe],
        };
      }
      const userSubsIndex = allMovieSubs.findIndex(
        item => item.userID == payload.userID,
      );
      // console.log('user subscribe data found in index: ', userSubsIndex);
      if (userSubsIndex >= 0) {
        const thisUserSubsArray = state.userSubscribedMovie[userSubsIndex];
        // console.log('user subscribe data: ', thisUserSubsArray);
        const newSubscribedArray = [
          payload.movie,
          ...thisUserSubsArray.subscribedMovie,
        ];
        // console.log(
        //   'user: ',
        //   thisUserSubsArray.userID,
        //   ' new subs array: ',
        //   newSubscribedArray,
        // );
        thisUserSubsArray.subscribedMovie = newSubscribedArray;
        // console.log('user subs data after mutation: ', thisUserSubsArray);
        allMovieSubs[userSubsIndex] = thisUserSubsArray;
        // console.log('all user subscribe state after mutation', allMovieSubs);

        // console.log('userSubs to save: ', allMovieSubs);
        return {
          ...state,
          userSubscribedMovie: allMovieSubs,
          userSubscribedMovieLastUpdate: Date.now(),
        };
      } else {
        const userSubscribe = {
          userID: payload.userID,
          subscribedMovie: [payload.movie],
        };
        return {
          ...state,
          userSubscribedMovie: [...state.userSubscribedMovie, userSubscribe],
        };
      }

    case 'UNSUBS_MOVIE':
      console.log(
        'user: ',
        payload.userID,
        ' unsub to movie: ',
        payload.movie._id,
      );
      const allMovieSubs2 = state.userSubscribedMovie;
      console.log('all user subscribe state: ', allMovieSubs2);
      const userSubsIndex2 = allMovieSubs2.findIndex(
        item => item.userID == payload.userID,
      );
      const userSubsData2 = allMovieSubs2[userSubsIndex2];
      console.log('userSubsData2: ', userSubsData2);
      const filteredUserSubsData = userSubsData2.subscribedMovie.filter(
        item => item._id != payload.movie._id,
      );
      console.log('filtered array: ', filteredUserSubsData);

      allMovieSubs2[userSubsIndex2].subscribedMovie = filteredUserSubsData;
      console.log('all movie subs after mutation: ', allMovieSubs2);

      return {
        ...state,
      };

    // return {
    //   ...state,
    //   userSubscribedMovie: state.userSubscribedMovie.filter(
    //     item => payload._id != item.id,
    //   ),
    //   userSubscribedMovieLastUpdate: Date.now(),
    // };
    case 'CLEAR_MOVIE_STATE':
      return {userSubscribedMovie: []};

    default:
      return state;
  }
};
