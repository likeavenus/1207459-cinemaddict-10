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

export const getFilterData = (arr) => {
  const filterData = {
    watchlist: 0,
    favorites: 0,
    history: 0
  };
  filterData.watchlist = filmsFilter(arr, `isWatching`);
  filterData.favorites = filmsFilter(arr, `isFavorite`);
  filterData.history = filmsFilter(arr, `isHistory`);
  return filterData;
};
