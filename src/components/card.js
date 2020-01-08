export const createFilmCardTemp = (film) => {
  const {filmName, rating, year, duration, genres, poster, description, comments} = film;
  return (
    `<article class="film-card">
        <h3 class="film-card__title">${filmName}</h3>
        <p class="film-card__rating">${rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${year}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genres}</span>
        </p>
        <img src="${poster}" alt="${filmName}" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        ${comments.length ? `<a class="film-card__comments">${comments.length} comments</a>` : ``}
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
      </article>`
  );
};
