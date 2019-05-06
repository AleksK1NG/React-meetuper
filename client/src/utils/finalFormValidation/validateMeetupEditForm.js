export const validateMeetupEditForm = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required !';
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

  if (!values.shortInfo) {
    errors.shortInfo = 'Additional info is required !';
  }

  if (!values.description) {
    errors.description = 'Description info is required !';
  }

  if (!values.location) {
    errors.location = 'Location is required !';
  }

  console.log('validate errors =>', errors);

  return errors;
};
