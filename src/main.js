import {createProfileTemp} from "./components/profile";
import {createHeadTemp} from "./components/head";
import {createFilmsListTemp} from "./components/filmsList";
import {createFilmCardTemp} from "./components/card";
import {createShowMoreTemp} from "./components/showMore";
import {createTopRatedTemp} from "./components/topRated";
import {mostCommentedTemp} from "./components/mostCommented";

import {filmsArr} from "./mocks/card";

const render = (container, elem, place = `beforeend`) => {
  container.insertAdjacentHTML(place, elem);
};

const mainElem = document.querySelector(`.main`);
const headerElem = document.querySelector(`.header`);

render(headerElem, createProfileTemp());
render(mainElem, createHeadTemp());

const filmsElem = document.querySelector(`.films`);

render(filmsElem, createFilmsListTemp());

const filmsListElem = document.querySelector(`.films-list`);
const filmsContainerElem = document.querySelector(`.films-list__container`);

const CARD_COUNT = 3;

console.log(filmsArr);
render(filmsContainerElem, createFilmCardTemp(filmsArr));

render(filmsListElem, createShowMoreTemp());

render(filmsElem, createTopRatedTemp());
render(filmsElem, mostCommentedTemp());

// const topRatedFilmsListElem = filmsElem.querySelector(`.films-list--extra`);
// const topRatedFilmsContainerElem = topRatedFilmsListElem.querySelector(`.films-list__container`);
// const TOP_RATED = 2;
//
// new Array(TOP_RATED)
//   .fill(``)
//   .forEach(()=> render(topRatedFilmsContainerElem, createFilmCardTemp(filmsArr)));
//
// const MOST_COMMENTED = 2;
//
// const mostCommentedFilsListElem = topRatedFilmsListElem.nextElementSibling.querySelector(`.films-list__container`);
//
// new Array(MOST_COMMENTED)
//   .fill(``)
//   .forEach(()=> render(mostCommentedFilsListElem, createFilmCardTemp(filmsArr)));
