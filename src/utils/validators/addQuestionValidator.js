import Validator from './baseValidator';

const validator = {
  subject: {
    presence: {
      allowEmpty: false
    },
    length: {
      minimum: 10,
      message: "must be at least 10 characters"
    }
  },
  description: {
    presence: {
      allowEmpty: false
    },
    length: {
      minimum: 10,
      message: "must be at least 10 characters"
    }
  }
};

export default class AddQuestionValidator extends Validator {
  static validate(question) {
    return super.validate(question, validator);
  }
}
