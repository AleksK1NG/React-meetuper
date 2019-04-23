/*
 * Final Form array helper
 * */
export const renderAuthors = (authors = []) => {
  if (authors.length === 1) {
    const [author] = authors;
    return `Author: ${author.name} ${author.surname}`;
  }
  return authors
    .reduce(
      (acc, author) => acc.concat(`${author.name} ${author.surname}, `),
      ''
    )
    .slice(0, -2);
};
