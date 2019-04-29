import { emailIsValid } from './validationHelpers';

export const validateLogin = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required !';
  }

  if (!values.password) {
    errors.password = 'Password is required !';
  }

  if (values.password && values.password.trim().length < 6) {
    errors.password = 'Password length must be greater then 6 characters';
  }

  if (values.email && !emailIsValid(values.email)) {
    errors.email = 'Invalid email !';
  }

  console.log('validate errors =>', errors);

  return errors;
};
