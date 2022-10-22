export const LOGIN_VARIABLE_NAMES = {
  token: 'token',
};

export const MIN_LENGTH_PASSWORD = 4;
export const LOGIN_VALIDATION_TEXT = {
  login: {
    required: 'Please, enter email',
    invalid: {
      common: 'Email is invalid',
    },
  },
  password: {
    required: 'Please, enter password',
    invalid: {
      common: 'Your password is not strong enough: ',
      minLength: ` - at least ${MIN_LENGTH_PASSWORD} characters`,
      lowAndUpperCase: ' - Low and Uppercase letters',
      lettersAndNumbers: ' - Letters and numbers',
      specialCharacter: ' - at least one symbol from ! @ # $ %',
    },
  },
};
