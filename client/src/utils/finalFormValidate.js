export const validate = (values) => {
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

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Password Confirmation is required !';
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
    errors.password = 'Password and password confirmation must be equal';
  }

  if (values.email && !emailIsValid(values.email)) {
    errors.email = 'Invalid email !';
  }

  if (values.avatar && !checkURL(values.avatar)) {
    errors.avatar = 'Invalid avatar URL !';
  }

  if (values.avatar && !is_url(values.avatar)) {
    errors.avatar = 'Invalid avatar URL !';
  }

  return errors;
};

// Email regex validator
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function is_url(avatar) {
  return /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(
    avatar
  );
}

function checkURL(url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}
