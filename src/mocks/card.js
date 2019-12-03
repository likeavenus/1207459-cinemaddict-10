import {createFilmCardTemp} from '../components/card';

const MOCK = {
  films: [
    `Интерстеллар`,
    `Начало`,
    `Star track`,
    `Горбатая гора`,
    `Игра престолов`,
    `Дюнкерк`,
    `Впритык`,
    `Стражи галактики`,
    `Spider-man`,
    `Карты, деньги, два ствола`,
    `Криминальное чтиво`,
    `Бешенные псы`,
    `Лунная афера`,
    `Гарольд и Кумар уходят в отрыв`,
    `Декстер`
  ],
  posters: [
    `../images/posters/made-for-each-other.png`,
    `../images/posters/popeye-meets-sinbad.png`,
    `../images/posters/sagebrush-trail.jpg`,
    `../images/posters/santa-claus-conquers-the-martians.jpg`,
    `../images/posters/the-dance-of-life.jpg`
  ],
  descriptions: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  ],
  genre: [
    `drama`,
    `comedy`,
    `action`,
    `horror`
  ]
};

export function getRandomInt(min, max, rounding = false) {
  if (rounding) {
    return (Math.random() * (max - min) + min).toFixed(1);
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

const getRandomParam = (array) => {
  return Math.floor(Math.random() * array.length);
};

export const generateFilmCard = () => {
  const {
    films,
    posters,
    descriptions,
    genre
  } = MOCK;

  const duration = `${getRandomInt(1, 3)}h ${getRandomInt(10, 55)}min`;
  const rating = getRandomInt(5.0, 10.0, true);

  return {
    filmName: films[getRandomParam(films)],
    rating,
    poster: posters[getRandomParam(posters)],
    description: descriptions[getRandomParam(descriptions)],
    duration,
    genre: genre[getRandomParam(genre)],
    year: getRandomInt(1990, 2010),
    isFavorite: Math.random() >= 0.5,
    isWatching: Math.random() >= 0.5,
    isHistory: Math.random() >= 0.5
  };
};


const FILMS_COUNT = 20;
export const filmsArray = new Array(FILMS_COUNT).fill(``).map(() => generateFilmCard());
const generatefilms = () => {
  return filmsArray.map((item) => createFilmCardTemp(item)).join(`\n`);
};

export const films = generatefilms();

export const topRatedArr = () => {
  return filmsArray.filter((film, index) => index < 2 ? parseFloat(film.rating) > 7.5 : null);
};

export const topRatedFilms = topRatedArr().map((item)=> createFilmCardTemp(item)).join(`\n`);
