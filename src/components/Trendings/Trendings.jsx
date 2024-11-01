import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "../FilmCard/FilmCard";
import style from "./Trendings.module.css";
import { API_URL } from "../../helpers/api";

const Trendings = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/films`,
      headers: {
        "Client-Country": "TR",
        Client: "web",
      },
    }).then((response) => {
      setLoading(false);
      const data = response?.data;
      if (data) {
        setFilms(data);
      }
    });
  }, []);

  return (
    !loading &&
    films && (
      <>
        <div className={style.trendings}>
          <h1>TRENDINGS</h1>
          {films?.map((film, index) => (
            <>
              <FilmCard film={film} />
            </>
          ))}
        </div>
      </>
    )
  );
};

export default Trendings;
