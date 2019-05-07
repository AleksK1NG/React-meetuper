export const validatePostForm = (values) => {
  const errors = {};

  if (!values.post) {
    errors.post = "You need write some text, it's required !";
  }

  return errors;
};
