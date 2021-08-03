import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const TAG = 'UserManager// ';

function validateEmail(mail) {
  let isValid = mail.includes('@gmail.com' || '@yahoo.com' || '@yandex.com');
  console.log(TAG, 'mail is valid = ', isValid);
  return isValid ? mail : `${mail}@gmail.com`;
}

export async function registerUserByEmail(mail, pass) {
  let emails = validateEmail(mail);
  console.log(TAG, 'registering user with input: ', emails, pass);
  auth()
    .createUserWithEmailAndPassword(emails, pass)
    .then(res => {
      let user = res.user;
      console.log(TAG, 'User account created with email: ', user.email);
      let payload = {
        userAuthData: user,
        userIsNewUser: res,
      };
      return payload;
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log(TAG, 'That email address is already in use!');
        return error;
      }

      if (error.code === 'auth/invalid-email') {
        console.log(TAG, 'That email address is invalid!');
        return error;
      }

      console.error(TAG, 'Error: ', error);
      return error;
    });
}

export async function loginUserByEmail(mail, pass) {
  let emails = validateEmail(mail);
  console.log(TAG, 'logging in user with input:', emails, pass);
  auth()
    .signInWithEmailAndPassword(emails, pass)
    .then(res => {
      // console.log(res);
      let user = res.user;

      console.log(TAG, 'signed in! with email: ' + user.email);
      let payload = {
        userAuthData: user,
        userIsNewUser: res,
      };
      return payload;
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log(TAG, 'That email address is already in use!');
        return error;
      }

      if (error.code === 'auth/invalid-email') {
        console.log(TAG, 'That email address is invalid!');
        return error;
      }
      if (error.code === 'auth/user-not-found') {
        console.log(TAG, 'That email address is not registered');
        return error;
      }

      console.error(TAG, 'error: ', error);
      return error;
    });
}

export async function logoutUser() {
  await auth()
    .signOut()
    .then(() => console.log(TAG, 'User signed out!'));
}

export async function setUserDataFirestore(userData) {
  console.log(TAG, 'user data to be stored: ', userData);
  await firestore()
    .collection('UserData')
    .doc(userData.userUID)
    .set(userData)
    .then(res => {
      console.log(TAG, 'user data is uploaded', res);
      return true;
    })
    .catch(e => {
      console.log(TAG, 'error: ', e);
      return false;
    });
}

export async function setUserInitialField(userName, userAuthData) {
  const payload = {
    userName: userName,
    userUID: userAuthData.userUID,
    userEmail: userAuthData.userEmail,
    userAvatar: null,
    userIsVerified: false,
    userLevel: 0,
    userIsAdmin: false,
    userIsOwner: false,
    userBio: null,
    userPhone: null,
    userAddress: null,
    userNotesAdm: null,
  };
  return setUserDataFirestore(payload);
}

export async function getUserByUID(UID) {
  console.log(TAG, 'user uid to be data fetched: ', UID);
  await firestore()
    .collection('UserData')
    .doc(UID)
    .get()
    .then(res => {
      console.log('data res', res.data());
      return res.data();
    });
}