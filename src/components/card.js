import {generateFilmCard} from "../mocks/card";

const createFilmCardTemp = (film) => {
  const {filmName, rating, year, duration, genre, poster, description} = film;
  return (
    `<article class="film-card">
        <h3 class="film-card__title">${filmName}</h3>
        <p class="film-card__rating">${rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${year}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genre}</span>
        </p>
        <img src="${poster}" alt="${filmName}" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <a class="film-card__comments">5 comments</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
      </article>`
  );
};

const FILMS_COUNT = 22;
const generatefilms = () => {
  return new Array(FILMS_COUNT)
    .fill(``)
    .map(() => createFilmCardTemp(generateFilmCard()));
};

export const films = generatefilms();
