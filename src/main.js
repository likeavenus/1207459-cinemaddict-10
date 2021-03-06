import StatisticsComponent from './components/statistics.js';
import UserProfileComponent from './components/user-rank.js';
import FilmSectionComponent from './components/films-section.js';
import {
  RenderPosition,
  render
} from './utils/render.js';
import {
  FilterTypeStatistic
} from './const.js';
import PageController from './controllers/page-controller';
import FilterController from './controllers/filter-controller.js';
import MoviesModel from './models/movies.js';

import {
  SortForm
} from './components/sort-form.js';
import nanoid from 'nanoid';
import API from './api.js';


const END_POINT = `https://htmlacademy-es-10.appspot.com/cinemaddict`;
const AUTORIZATION = `Basic ${nanoid()}`;

const api = new API(END_POINT, AUTORIZATION);
const moviesModel = new MoviesModel();
const siteHeader = document.querySelector(`.header`);
const siteMainSection = document.querySelector(`.main`);
const footerStatistic = document.querySelector(`.footer__statistics p`);
const sortComponent = new SortForm();
const filmSectionComponent = new FilmSectionComponent();
render(siteMainSection, filmSectionComponent.getElement(), RenderPosition.BEFOREEND);
render(siteMainSection, sortComponent.getElement(), RenderPosition.AFTERBEGIN);
const filterComponent = new FilterController(siteMainSection, moviesModel);

api.getFilms()
  .then((films) => {
    moviesModel.setFilms(films);
    filterComponent.render();
    const statisticsComponent = new StatisticsComponent(moviesModel.getFilms(), FilterTypeStatistic.ALL);
    const userProfileComponent = new UserProfileComponent(moviesModel.getAllFilms());
    render(siteHeader, userProfileComponent.getElement(), RenderPosition.BEFOREEND);
    const pageController = new PageController(filmSectionComponent, sortComponent, moviesModel, filterComponent, statisticsComponent, api, userProfileComponent);
    render(siteMainSection, statisticsComponent.getElement(), RenderPosition.BEFOREEND);
    const promises = films.map((film) => api.getComments(film[`id`]).then((comments) => comments));
    Promise.all(promises).then((comments) => {
      moviesModel.setComments(comments);
      pageController.render();
      footerStatistic.textContent = `${moviesModel.getAllFilms().length} movies inside`;
    });
  });
