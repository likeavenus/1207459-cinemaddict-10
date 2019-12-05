import {createProfileTemp} from "./components/profile";
import {createHeadTemp} from "./components/head";
import {createFilmsListTemp} from "./components/filmsList";
import {createShowMoreTemp} from "./components/showMore";
import {createTopRatedTemp} from "./components/topRated";
import {mostCommentedTemp} from "./components/mostCommented";
import {filmsArray} from "./mocks/card";
import {getUsername} from "./mocks/userRank";
import {getFilterData} from "./mocks/menu";
import {getTopRatedArr} from "./mocks/card";
import {getMostCommentedArr} from "./mocks/card";
import {createFilmCardTemp} from "./components/card";
import {filmDetailsTemp} from "./components/filmDetails";

const render = (container, elem, place = `beforeend`) => {
  container.insertAdjacentHTML(place, elem);
};

const mainElem = document.querySelector(`.main`);
const headerElem = document.querySelector(`.header`);

render(headerElem, createProfileTemp(getUsername()));

render(mainElem, createHeadTemp(getFilterData(filmsArray).watchlist, getFilterData(filmsArray).favorites, getFilterData(filmsArray).history));

const filmsElem = document.querySelector(`.films`);

render(filmsElem, createFilmsListTemp());

const filmsListElem = document.querySelector(`.films-list`);
const filmsContainerElem = document.querySelector(`.films-list__container`);

const generatefilms = () => {
  return filmsArray.map((item) => createFilmCardTemp(item)).join(`\n`);
};
render(filmsContainerElem, generatefilms());

render(filmsListElem, createShowMoreTemp());

render(filmsElem, createTopRatedTemp());
render(filmsElem, mostCommentedTemp());

const footerStatistics = document.querySelector(`.footer__statistics p`);
footerStatistics.innerHTML = `${filmsArray.length} movies inside`;

const filmCards = document.querySelectorAll(`.film-card`);
const showMoreBtn = document.querySelector(`.films-list__show-more`);


let CURRENT_CARDS_COUNT = -1;
const showOtherCards = () => {
  CURRENT_CARDS_COUNT += 5;
  if (CURRENT_CARDS_COUNT >= filmsArray.length - 1) {
    showMoreBtn.remove();
  }
  filmCards.forEach((item, index)=> {
    if (index > CURRENT_CARDS_COUNT) {
      item.style.display = `none`;
    } else {
      item.style.display = `block`;
    }
  });
};

showOtherCards();
showMoreBtn.addEventListener(`click`, showOtherCards);

const topRatedFilmsListElem = filmsElem.querySelector(`.films-list--extra`);
const topRatedFilmsContainerElem = topRatedFilmsListElem.querySelector(`.films-list__container`);

const topRatedFilms = getTopRatedArr().map((item)=> createFilmCardTemp(item)).join(`\n`);

if (!getTopRatedArr().filter((film) => film.rating > 0).length) {
  topRatedFilmsListElem.style.display = `none`;
} else {
  let ratingStatus = 0;
  getTopRatedArr().map((item)=> {
    ratingStatus += item.rating;
  });
  if (ratingStatus) {
    render(topRatedFilmsContainerElem, topRatedFilms);
  }
}

render(mainElem, filmDetailsTemp(filmsArray[0]));

const mostCommentedFilsListElem = topRatedFilmsListElem.nextElementSibling.querySelector(`.films-list__container`);

const mostCommentedFilms = getMostCommentedArr(filmsArray).filter((item, index) => index > 1 ? null : item);

if (mostCommentedFilms.length) {
  render(mostCommentedFilsListElem, mostCommentedFilms.map((item) => createFilmCardTemp(item)).join(`\n`));
} else {
  mostCommentedFilsListElem.parentElement.style.display = `none`;
}

// new Array(MOST_COMMENTED)
//   .fill(``)
//   .forEach(()=> render(mostCommentedFilsListElem, createFilmCardTemp(filmsArr)));
