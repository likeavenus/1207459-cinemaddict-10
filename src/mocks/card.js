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

const commentsMock = {
  emoji: [
    `./images/emoji/angry.png`,
    `./images/emoji/puke.png`,
    `./images/emoji/sleeping.png`,
    `./images/emoji/smile.png`,
    `./images/emoji/trophy.png`,
  ],
  commentsText: [
    `Interesting setting and a good cast`,
    `Booooooooooring`,
    `Very very old. Meh`,
    `Almost two hours? Seriously?`
  ],
  usernames: [
    `Tim Macoveev`,
    `John Doe`,
  ]
};

const generateComments = () => {
  const {emoji, commentsText, usernames} = commentsMock;
  return {
    emoji: emoji[getRandomParam(emoji)],
    commentsText: commentsText[getRandomParam(commentsText)],
    username: usernames[getRandomParam(usernames)],
    time: `2 days ago`
  };
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
    originalName: films[getRandomParam(films)],
    rating,
    poster: posters[getRandomParam(posters)],
    description: descriptions[getRandomParam(descriptions)],
    fullDescription: `The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in...`,
    duration,
    year: getRandomInt(1990, 2010),
    isFavorite: Math.random() >= 0.5,
    isWatching: Math.random() >= 0.5,
    isHistory: Math.random() >= 0.5,
    comments: new Array(getRandomInt(0, 5)).fill(``).map((comment) => generateComments(comment)),
    ageRating: `16+`,
    director: `C. Nolan`,
    writers: `Anne Wigton, Heinz Herald`,
    actors: `Vasiliy, Alex, Tolik`,
    releaseDate: `${getRandomInt(1, 30)} March ${getRandomInt(1900, 2010)}`,
    country: `USA`,
    genres: [genre[getRandomParam(genre)]],
  };
};

const FILMS_COUNT = 22;
export const filmsArray = new Array(FILMS_COUNT).fill(``).map(() => generateFilmCard());

export const getTopRatedArr = () => {
  return filmsArray.filter((film, index) => index < 2 ? parseFloat(film.rating) > 7.5 : null);
};

export const getMostCommentedArr = () => {
  return filmsArray.slice(0, 2);
};
