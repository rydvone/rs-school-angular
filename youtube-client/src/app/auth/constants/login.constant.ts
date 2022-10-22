export const LoginVariableNames = {
  token: 'token',
};

export const MinLengthPassword = 4;
export const LoginValidationText = {
  login: {
    required: 'Please, enter email login',
    invalid: {
      common: 'Email is invalid',
    },
  },
  password: {
    required: 'Please, enter password',
    invalid: {
      common: 'Your password is not strong enough: ',
      minLength: ` - at least ${MinLengthPassword} characters`,
      lowAndUpperCase: ' - Low and Uppercase letters',
      lettersAndNumbers: ' - Letters and numbers',
      specialCharacter: ' - at least one symbol from ! @ # $ %',
    },
  },
};
