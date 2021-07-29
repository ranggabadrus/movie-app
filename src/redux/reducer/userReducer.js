const initialState = {
  userName: 'default_name',
  userUID: 'default_UID',
  userEmail: 'default_Email',
  userData: {},
  dummyData: 'hahahaha',
};

const TAG = 'userReducer// ';

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        userName: payload.userName,
        userUID: payload.userUID,
        userEmail: payload.userEmail,
      };

    case 'SET_USER_DATA':
      return {
        ...state,
        userData: payload,
      };
    case 'CHANGE_DUMMYDATA':
      return {
        ...state,
        dummyData: payload,
      };
    case 'GET_USERDATA':
      return {
        ...state,
        userData: payload.userData,
        isSuccess: payload.isSuccess,
      };
    case 'GET_USERDATA_FAILED':
      console.log(TAG, 'payload: ', payload);
      return {
        ...state,
        errorMessage: payload.message,
        isSuccess: payload.isSuccess,
      };

    default:
      return state;
  }
};
