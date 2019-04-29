import { checkURL, is_url } from './validationHelpers';

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
