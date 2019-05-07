import { emailIsValid, is_url } from './validationHelpers';

export const validateRegister = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required !';
  }

  if (!values.password) {
    errors.password = 'Password is required !';
  }
  if (!values.passwordConfirmation) {
    errors.password = 'Password Confirmation is required !';
  }

  if (values.password && values.password.trim().length < 6) {
    errors.password = 'Password length must be greater then 6 characters';
  }

  if (
    values.passwordConfirmation &&
    values.passwordConfirmation.trim().length < 6
  ) {
    errors.passwordConfirmation =
      'Password length must be greater then 6 characters';
  }

  if (
    values.passwordConfirmation &&
    values.passwordConfirmation.trim() !== values.password.trim()
  ) {
    errors.passwordConfirmation =
      'Password and password confirmation must be equal';
  }

  if (values.email && !emailIsValid(values.email)) {
    errors.email = 'Invalid email !';
  }

  // if (values.avatar && !checkURL(values.avatar)) {
  //   errors.avatar = 'Invalid avatar URL !';
  // }

  if (values.avatar && !is_url(values.avatar)) {
    errors.avatar = 'Invalid avatar URL !';
  }

  return errors;
};
