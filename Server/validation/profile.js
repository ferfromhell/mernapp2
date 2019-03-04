const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function ValidateProfileInput(data){
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';
  data.website = !isEmpty(data.website) ? data.website : '';
  
  if (!validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 40 characters';
  }
  if (validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }
  if (validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }
  if (!validator.isURL(data.website)) {
    errors.website = 'Not a valid URL';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}