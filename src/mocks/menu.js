export const filmsFilter = (arr, option) => {
  switch (option) {
    case `isFavorite`:
      return arr.filter((film) => film.isFavorite).length;
    case `isWatching`:
      return arr.filter((film) => film.isWatching).length;
    case `isHistory`:
      return arr.filter((film) => film.isWatching).length;

    default:
      return arr.length;
  }
};
