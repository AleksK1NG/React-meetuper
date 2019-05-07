import { is_url } from './validationHelpers';

export const validateUserUpdateModalForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required !';
  }

  if (!values.username) {
    errors.username = 'Username is required !';
  }

  if (!values.avatar) {
    errors.avatar = 'Avatar is required !';
  }

  if (!values.info) {
    errors.info = 'Info is required !';
  }

  if (values.avatar && !is_url(values.avatar)) {
    errors.avatar = 'Invalid Avatar URL !';
  }

  return errors;
};
