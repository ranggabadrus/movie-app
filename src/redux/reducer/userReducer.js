const initialState = {
  userData: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_USER_DATA':
      return {...state, userData: payload};
    case 'REMOVE_USER_DATA':
      return {...state, userData: {}};
    case 'SET_USER_DATA':
      return {...state, ...payload};
    default:
      return state;
  }
};
