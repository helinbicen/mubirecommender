import React from "react";
import style from "./FilmCard.module.css";
import { BsClockFill } from "react-icons/bs";


function FilmCard({ film }) {
  return (
    <div
      style={{ backgroundColor: `#${film.average_colour_hex}` }}
      className={style.cardContainer}
    >
      <div
        className={style.filmCover}
        style={{ background: `url("${film.still_url}")` }}
      />

      <div className={style.filmInfo}>
        <div className={style.titleContainer}>
          <p className={style.title}>{film.original_title}</p>
         
          <p className={style.year}>({film.year})</p>
        </div>
        <p className={style.director}>
          {film.directors.map((director) => `directed by ${director.name}`)}
        </p>
        <div className={style.durationContainer}>
        <BsClockFill />
        <p className={style.duration}>{film.duration} minutes</p>
       
        </div>
        <ul className={style.genres}>
          {film.genres.map((genre) => (
            <li className={style.genre}>● {genre}</li>
          ))}
        </ul>
        <p className={style.averageRating}>
          {film.average_rating_out_of_ten} / 10
        </p>
      </div>

      <div className={style.descriptionContainer}>
        <p className={style.shortSynopsis}>{film.short_synopsis}</p>
        <a className={style.webUrl} href={film.web_url}>
          <button className={style.urlButton}>Click to Open on Mubi</button>
        </a>
      </div>
    </div>
  );
}

export default FilmCard;
