export default class Card {
  constructor(params) {
    this.filmName = params.filmName;
    this.rating = params.rating;
    this.year = params.year;
    this.duration = params.duration;
    this.genre = params.genre;
    this.poster = params.poster;
    this.description = params.description;
    this.comments = params.comments;
  }
}

const createFilmCardTemp = () => {
  return (
    `<article class="film-card">
        <h3 class="film-card__title"></h3>
        <p class="film-card__rating"></p>
        <p class="film-card__info">
          <span class="film-card__year"></span>
          <span class="film-card__duration"></span>
          <span class="film-card__genre"></span>
        </p>
        <img src="" alt="" class="film-card__poster">
        <p class="film-card__description"></p>
        <a class="film-card__comments"></a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
    </article>`
  );
};





// export const createFilmCardTemp = (film) => {
//   const {filmName, rating, year, duration, genre, poster, description, comments} = film;
//   return (
//     `<article class="film-card">
//         <h3 class="film-card__title">${filmName}</h3>
//         <p class="film-card__rating">${rating}</p>
//         <p class="film-card__info">
//           <span class="film-card__year">${year}</span>
//           <span class="film-card__duration">${duration}</span>
//           <span class="film-card__genre">${genre}</span>
//         </p>
//         <img src="${poster}" alt="${filmName}" class="film-card__poster">
//         <p class="film-card__description">${description}</p>
//         ${comments.length ? `<a class="film-card__comments">${comments.length} comments</a>` : ``}
//         <form class="film-card__controls">
//           <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
//           <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
//           <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
//         </form>
//       </article>`
//   );
// };
