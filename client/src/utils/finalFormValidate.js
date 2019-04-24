export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required !';
  }

  if (!values.password) {
    errors.password = 'Password is required !';
  }

  if (values.password && values.password.trim().length < 6) {
    errors.password = 'Password must > 6 characters';
  }

  return errors;
};
