export function directorsFormattedForDropdown(directors) {
  return directors.map(director => {
    return {
      value: director.id,
      text: director.firstName + ' ' + director.lastName
    };
  });
}
