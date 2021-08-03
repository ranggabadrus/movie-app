import {DummyData} from './../../utilities/DummyData';
const dummyUser = DummyData.dummyUserData[0];

export const changeUser = payload => {
  console.log('change user state');
  dispatch({
    type: 'SET_USER',
    payload: payload,
  });
};

export const changeDummiesDat = payload => {
  console.log('change dummy data');
  return {
    type: 'CHANGE_DUMMYDATA',
    payload: payload,
  };
};

export const userAuthRegister = payload => {
  try {
    dispatch({
      type: 'USER_REGISTER',
      payload: {
        loading: true,
        success: false,
        message: 'registering user',
      },
    });
  } catch (e) {
    console.log('registerUser error: ', e);
    dispatch({
      type: 'USER_REGISTER_ERROR',
      payload: {
        loading: false,
        success: false,
        message: e,
      },
    });
  }
};

export const updateUser = payload => {};

export const userAuthLogin = payload => {};

//firebase exmpl:
// export const getUserDataRedux = userUID => {
//   return async (dispatch, getState) => {
//     await firestore()
//       .collection('UserData')
//       .doc(userUID)
//       .get()
//       .then(res => {
//         const userData = res.data();
//         // console.log('data res', res.data());
//         console.log(`fetching user data by UID: ${userUID} //Data: `, userData);
//         dispatch({
//           type: 'GET_USERDATA',
//           payload: {userData, isSuccess: true},
//         });
//         return res.data();
//       })
//       .catch(e => {
//         console.log('error: ', e);
//         dispatch({
//           type: 'GET_USERDATA_FAILED',
//           payload: {isSuccess: false, message: e},
//         });
//       });
//   };
// };
