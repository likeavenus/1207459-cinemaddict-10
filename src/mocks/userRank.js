import {filmsFilter} from "./menu";
import {filmsArray} from "./card";

export const getUsername = () => {
  return filmsFilter(filmsArray, `isWatching`) > 12 ? `Movie Buff` : `Newbie`;
};
