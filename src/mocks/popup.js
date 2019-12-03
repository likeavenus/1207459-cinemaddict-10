import {getRandomInt} from "./card";

export const popupData = () => {
  return {
    title: `Дюнкерк`,
    subtitle: `Военный фильм`,
    rating: `${getRandomInt(5.0, 10.0, true)}`,
    director: `C. Nolan`,
    actors: [`Vasiliy`, `Alex`, `Tolik`],
    releaseDate: `${getRandomInt(1, 30)} March ${getRandomInt(1900, 2010)}`,
    runtime: `${getRandomInt(1, 3)}h ${getRandomInt(1, 60)}m`,
    country: `USA`,
    genres: [`action, drama`],
    description: `The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in...`,
    ageRating: `18+`
  };
};
