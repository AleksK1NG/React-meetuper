export const rejectError = ({ response = null }) => {
  let message = 'Ooops, something went wrong';

  if (response && response.data && response.data.errors) {
    message = response.data.errors.message || message;
  }

  return message;
};
