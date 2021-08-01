export const validateEmail = email => {
  console.log('validating email: ', email);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email) === false) {
    console.log('Email is Invalid');
    // this.setState({email: email});
    return {valid: false, email};
  } else {
    // this.setState({email: email});
    console.log('Email is Valid');
    return {valid: true, email};
  }
};

export const validatePassword = password => {
  if (password.length <= 8) {
    return {valid: false, password};
  } else {
    return {valid: true, password};
  }
};
