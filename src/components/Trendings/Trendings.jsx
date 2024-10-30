import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "../FilmCard/FilmCard";

function Trendings() {
  const [loading, setLoading] = useState(true);
  const [titles, setTitles] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.mubi.com/v4/collections/trending/films",
      headers: {
        "Client-Country": "TR",
        Client: "web",
      },
    }).then((response) => {
      setLoading(false);
      const data = response?.data?.films;
      if (data) {
        setFilms(data);
      }
    });
  }, []);

  return (
    films && (
      <>
        <div>
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
}

export default Trendings;
