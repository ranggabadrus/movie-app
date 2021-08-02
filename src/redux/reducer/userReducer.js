const initialState = {
  userData: {},
  loading: false,
  success: false,
  message: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'USER_REGISTER':
      return {...state, payload};
    case 'USER_REGISTER_SUCCESS':
      return {...state, payload};
    case 'USER_REGISTER_FAILED':
      return {...state, payload};

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
