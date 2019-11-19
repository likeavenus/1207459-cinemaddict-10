'use strict';

const avatarTemp = () => {
  return (
    `<section class="header__profile profile">
        <p class="profile__rating">Movie Buff</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

const mainHeadTemp = () => {
  return (
    `<nav class="main-navigation">
       <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
       <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
       <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
       <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
       <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
    </nav>

    <ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};

const filmCardTemp = () => {
  return (
    `<article class="film-card">
          <h3 class="film-card__title">The Dance of Life</h3>
          <p class="film-card__rating">8.3</p>
          <p class="film-card__info">
            <span class="film-card__year">1929</span>
            <span class="film-card__duration">1h 55m</span>
            <span class="film-card__genre">Musical</span>
          </p>
          <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
          <a class="film-card__comments">5 comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`
  );
};

const filmsContainerTemp = () => {
  return (
    `<section class="films">
        <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
            <div class="films-list__container"></div>
        </section>
    </section>`
  );
};

const moreFilmsButtonTemp = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

const topRatedTemp = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};

const mostCommentedTemp = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};

const headerElem = document.querySelector(`.header`);
const mainElem = document.querySelector(`.main`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(headerElem, avatarTemp());
render(mainElem, mainHeadTemp());
render(mainElem, filmsContainerTemp());

const filmsSectionElem = mainElem.querySelector(`.films`);
const filmsListContainerElem = mainElem.querySelector(`.films-list`);
const filmsListElem = mainElem.querySelector(`.films-list__container`);

const FILMS_COUNT = 5;
const TOP_RATED_FILMS = 2;
const MOST_COMMENTED = 2;

new Array(FILMS_COUNT)
  .fill(``)
  .forEach(()=> {
    render(filmsListElem, filmCardTemp());
  });

render(filmsListContainerElem, moreFilmsButtonTemp());
render(filmsSectionElem, topRatedTemp());
render(filmsSectionElem, mostCommentedTemp());

const topRatedFilmsElem = mainElem.querySelector(`.films-list--extra`);
const mostCommentedFilmsElem = mainElem.querySelector(`.films-list--extra`);
const topRatedFilmsListElem = topRatedFilmsElem.querySelector(`.films-list__container`);
const mostCommentedListElem = mostCommentedFilmsElem.nextElementSibling.querySelector(`.films-list__container`);

new Array(TOP_RATED_FILMS)
  .fill(``)
  .forEach(()=> {
    render(topRatedFilmsListElem, filmCardTemp());
  });

new Array(MOST_COMMENTED)
  .fill(``)
  .forEach(()=> {
    render(mostCommentedListElem, filmCardTemp());
  });
