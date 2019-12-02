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
  durations: [
    `3h`,
    `2h 30min`,
    `1h 50min`,
    `3h 10min`,
    `2h 22min`
  ],
  genre: [
    `drama`,
    `comedy`,
    `action`,
    `horror`
  ],
  years: [
    getRandomInt(1990, 2010),
    getRandomInt(1990, 2010),
    getRandomInt(1990, 2010),
    getRandomInt(1990, 2010),
    getRandomInt(1990, 2010)
  ],
  ratings: [
    `8.9`,
    `9.0`,
    `10.0`,
    `8.8`,
    `9.7`,
    `7.9`
  ]
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomParam = (array) => {
  return Math.floor(Math.random() * array.length);
};

export const generateFilmCard = () => {
  const {
    films,
    posters,
    descriptions,
    durations,
    genre,
    years,
    ratings
  } = MOCK;

  return {
    filmName: films[getRandomParam(films)],
    rating: ratings[getRandomParam(ratings)],
    poster: posters[getRandomParam(posters)],
    description: descriptions[getRandomParam(descriptions)],
    duration: durations[getRandomParam(durations)],
    genre: genre[getRandomParam(genre)],
    year: years[getRandomParam(years)],
  };
};


const FILMS_COUNT = 22;
const generatefilms = () => {
  return new Array(FILMS_COUNT)
    .fill(``)
    .map(() => createFilmCardTemp(generateFilmCard()));
};

export const films = generatefilms();

// export const filmsArr = [
//   {
//     film: `Интерстеллар`,
//     poster: `../images/posters/made-for-each-other.png`,
//     description: `Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.`,
//     year: `2014`,
//     duration: `3h`,
//     genre: `drama`,
//     rating: `9.8`
//   },
//   {
//     film: `Начало`,
//     poster: `../images/posters/popeye-meets-sinbad.png`,
//     description: `Кобб — талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил.`,
//     year: `2010`,
//     duration: `2h 28min`,
//     genre: `drama`,
//     rating: `9.9`
//   },
//   {
//     film: `Star track`,
//     poster: `../images/posters/sagebrush-trail.jpg`,
//     description: `Когда Нерон с планеты Ромул приходит из будущего, чтобы отомстить Федерации, конкуренты Кирк и Спок должны объединиться, чтобы не дать ему разрушить все, что им дорого. Во время этого будоражащего путешествия, наполненного эффектными боями, юмором и космическими угрозами, новоиспеченные члены команды военного корабля «Энтерпрайз» смело встретятся лицом к лицу с невообразимыми опасностями.`,
//     year: `2010`,
//     duration: `2h`,
//     genre: `drama`,
//     rating: `8.0`
//   },
//   {
//     film: `Горбатая гора`,
//     poster: `../images/posters/santa-claus-conquers-the-martians.jpg`,
//     description: `На фоне живописных просторов штата Вайоминг разворачивается история сложных взаимоотношений двух молодых людей — помощника владельца ранчо и ковбоя родео. Герои случайно встречаются и скоро понимают, что не могут жить друг без друга. Однако судьба упрямо испытывает их на прочность.`,
//     year: `2010`,
//     duration: `2h 28min`,
//     genre: `drama`,
//     rating: `9.9`
//   },
//   {
//     film: `Криминальное чтиво`,
//     poster: `../images/posters/santa-claus-conquers-the-martians.jpg`,
//     description: `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
//     year: `1994`,
//     duration: `2h 30min`,
//     genre: `action`,
//     rating: `10.0`
//   },
//   {
//     film: `Лунная афера`,
//     poster: `../images/posters/the-dance-of-life.jpg`,
//     description: `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
//     year: `2010`,
//     duration: `2h 28min`,
//     genre: `drama`,
//     rating: `9.9`
//   }
// ];
