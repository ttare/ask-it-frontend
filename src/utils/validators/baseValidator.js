/* eslint-disable no-param-reassign */
import validate from 'validate.js';

export const hasOwnProperty = (object, attribute) =>
  Object.prototype.hasOwnProperty.call(object, attribute);

validate.formatters.custom = errors => {
  return errors.reduce((errorObj, { attribute, error }) => {
    if (!hasOwnProperty(errorObj, attribute)) {
      errorObj[attribute] = typeof error === 'string' ? error : error[0];
    }
    return errorObj;
  }, {});
};

validate.validators.array = (array, itemConstraints) =>
  (array || []).reduce((errorMapper, item) => {
    const error = validate(item, itemConstraints, { format: 'flat' });
    if (error) {
      errorMapper = Object.assign(errorMapper, error);
    }
    return errorMapper;
  }, {});


class Validator {
  static validate(object, scheme, noErrorValue = {}) {
    return (
      validate(object, scheme, {
        format: 'custom'
      }) || noErrorValue
    );
  }
}

export default Validator;
