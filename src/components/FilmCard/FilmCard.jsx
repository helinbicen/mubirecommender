import React from "react";
import style from "./FilmCard.module.css";
import { BsClockFill } from "react-icons/bs";

function FilmCard({ film }) {
  return (
    <div
      style={{ backgroundColor: `#${film.filmColor}` }}
      className={style.cardContainer}
    >
      <div
        className={style.filmImg}
        style={{ background: `url("${film.filmImg}")` }}
      />

      <div className={style.content}>
        <div className={style.filmInfo}>
          <div className={style.titleContainer}>
            <p className={style.title}>{film.filmName}</p>

            <p className={style.year}>({film.filmYear})</p>
          </div>
          <p className={style.director}>directed by {film.filmDirector}</p>
          <div className={style.durationContainer}>
            <BsClockFill />
            <p className={style.duration}>{film.fiLmDuration} minutes</p>
          </div>
          <ul className={style.genres}>
            {film.filmGenre.map((genre) => (
              <li className={style.genre}>● {genre}</li>
            ))}
          </ul>
          <div className={style.ratingContainer}>
            <p>
              <span className={style.ratingType}>Mubi Rating: </span>
              <span className={style.mubiRating}> {film.mubiRating} / 10 </span>
            </p>
            <p>
              <span className={style.ratingType}>Imdb Rating: </span>
              <span className={style.imdbRating}>{film.imdbRating} / 10</span>
            </p>
            <p>
              <span className={style.ratingType}>Average Rating: </span>
              <span className={style.averageRating}>
                {film.averageRating} / 10
              </span>
            </p>
          </div>
        </div>

        <div className={style.descriptionContainer}>
          <p className={style.shortSynopsis}>{film.filmDescription}</p>
          <a className={style.webUrl} href={film.filmWebUrl}>
            <button className={style.urlButton}>Click to Open on Mubi</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;
