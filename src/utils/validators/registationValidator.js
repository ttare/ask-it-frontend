import Validator from './baseValidator';

const validator = {
  name: {
    presence: {
      allowEmpty: false,
    },
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  },
  username: {
    presence: {
      allowEmpty: false,
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
  },
  verifyPassword: (attributes, constraints) => {
    const passwordsMismatch = constraints.password !== attributes;
    if (!passwordsMismatch) return null;
    return {
      equality: {
        attribute: 'password',
        message: '^The passwords does not match',
      },
    };
  }
};

export default class RegistrationValidator extends Validator {
  static validate(auth) {
    return super.validate(auth, validator);
  }
}
