import {createProfileTemp} from "./components/profile";
import {createHeadTemp} from "./components/head";
import {createFilmsListTemp} from "./components/filmsList";
import {createShowMoreTemp} from "./components/showMore";
import {createTopRatedTemp} from "./components/topRated";
import {mostCommentedTemp} from "./components/mostCommented";
import {films, filmsArray} from "./mocks/card";
import {getUsername} from "./mocks/userRank";
import {getFilterData} from "./mocks/menu";
import {topRatedArr, topRatedFilms} from "./mocks/card";

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
render(filmsContainerElem, films);

render(filmsListElem, createShowMoreTemp());

render(filmsElem, createTopRatedTemp());
render(filmsElem, mostCommentedTemp());

const footerStatistics = document.querySelector(`.footer__statistics p`);
footerStatistics.innerHTML = `${filmsArray.length} movies inside`;

const filmCards = document.querySelectorAll(`.film-card`);
const showMoreBtn = document.querySelector(`.films-list__show-more`);


let CURRENT_CARDS_COUNT = -1;
function showOtherCards() {
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
}
showOtherCards();
showMoreBtn.addEventListener(`click`, function () {
  showOtherCards();
});


const topRatedFilmsListElem = filmsElem.querySelector(`.films-list--extra`);
const topRatedFilmsContainerElem = topRatedFilmsListElem.querySelector(`.films-list__container`);

console.log(topRatedArr());
if (!topRatedArr().length) {
  topRatedFilmsListElem.style.display = `none`;
} else {
  render(topRatedFilmsContainerElem, topRatedFilms);
}


// new Array(TOP_RATED)
//   .fill(``)
//   .forEach(()=> render(topRatedFilmsContainerElem, createFilmCardTemp(films)));
//
// const MOST_COMMENTED = 2;
//
// const mostCommentedFilsListElem = topRatedFilmsListElem.nextElementSibling.querySelector(`.films-list__container`);
//
// new Array(MOST_COMMENTED)
//   .fill(``)
//   .forEach(()=> render(mostCommentedFilsListElem, createFilmCardTemp(filmsArr)));
