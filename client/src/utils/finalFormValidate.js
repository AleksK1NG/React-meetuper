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

  if (values.avatar && !checkURL(values.avatar)) {
    errors.avatar = 'Invalid avatar URL !';
  }

  if (values.avatar && !is_url(values.avatar)) {
    errors.avatar = 'Invalid avatar URL !';
  }

  console.log('validate errors =>', errors);

  return errors;
};

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

export const validateMeetupCreateForm = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required !';
  }

  if (!values.image) {
    errors.image = 'Image URL is required !';
  }

  if (!values.startDate) {
    errors.startDate = 'Start Date is required !';
  }

  if (!values.timeFrom) {
    errors.timeFrom = 'Start time is required !';
  }

  if (!values.timeTo) {
    errors.timeTo = 'End time is required !';
  }

  if (!values.category) {
    errors.category = 'Category is required !';
  }

  if (!values.shortInfo) {
    errors.shortInfo = 'Additional info is required !';
  }

  if (!values.description) {
    errors.description = 'Description info is required !';
  }

  if (!values.location) {
    errors.location = 'Location is required !';
  }

  if (values.image && !checkURL(values.image)) {
    errors.image = 'Invalid Image URL !';
  }

  if (values.image && !is_url(values.image)) {
    errors.image = 'Invalid Image URL !';
  }

  console.log('validate errors =>', errors);

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
