export const changeUser = payload => {
  console.log('change user state');
  return {
    type: 'SET_USER',
    payload: payload,
  };
};
export const changeUserData = payload => {
  console.log('change user data');
  return {
    type: 'SET_USER_DATA',
    payload: payload,
  };
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
    
  } catch (e) {
    console.log('registerUser error: ',e);
  }
};



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
