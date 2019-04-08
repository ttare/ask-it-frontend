import Validator from './baseValidator';

const validator = {
  username: {
    presence: {
      allowEmpty: false
    },
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  },
  password: {
    presence: {
      allowEmpty: false
    },
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  }
};

export default class LoginValidator extends Validator {
  static validate(auth) {
    return super.validate(auth, validator);
  }
}
