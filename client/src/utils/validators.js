export const validateAuthors = (authors = []) => {
  const errors = {};
  if (authors.length < 1) {
    return errors;
  }
  return authors.map((author) => {
    if (!author.name) errors.name = 'Required field';
    if (!author.surname) errors.surname = 'Required field';
    if (author.name && author.name.length > 20)
      errors.name = 'Name max length is 20 characters';

    if (author.surname && author.surname.length > 20)
      errors.surname = 'Surname max length is 20 characters';

    return errors;
  });
};

export const validatePageCount = (length) => {
  let result = '';
  let numOfPages = parseInt(length);

  if (numOfPages === 0 || numOfPages > 10000) {
    result = 'Number of pages must be > 0 and < 10000';
  }
  return result;
};

export const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required !';
  }
  if (values.title && values.title.toString().length > 30) {
    errors.title = 'Max length is 30';
  }
  if (!values.length) {
    errors.length = 'Number of pages is required !';
  }
  if (values.publisher && values.publisher.toString().length > 30) {
    errors.publisher = 'Maximum 30 characters';
  }

  if (
    values.image &&
    !values.image
      .toString()
      .trim()
      .endsWith('.jpg')
  ) {
    errors.image =
      'Image is only .jpg link, example: https://someadress.com/image.jpg';
  }

  if (values.publicationYear && parseInt(values.publicationYear) < 1800) {
    errors.publicationYear = 'Publication year must be after 1800 year';
  }
  if (
    values.publicationDate &&
    parseInt(values.publicationDate.split('-')[0]) < 1800
  ) {
    errors.publicationDate = 'Publication date must be after 1800 year';
  }

  return errors;
};
