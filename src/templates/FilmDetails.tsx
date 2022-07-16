import React from "react";
import { Film } from "../Film";
import "./FilmDetails.css";

interface FilmDetailsProps {
  film: Film;
}

function FilmDetails({ film }: FilmDetailsProps): JSX.Element | null {
  if (!film) {
    return null;
  }

  return (
    <div className="container">
      <img src={film.poster} alt={`${film.title} poster`} height="700px" />
      <div>
        <h2>{`${film.title} (${film.imdb_rating})`}</h2>
        <p>{`${film.released_on.getFullYear} | ${film.length} | ${film.director}`}</p>
        <p>{`cast: ${film.cast.join(", ")}`}</p>
        <p>{`Movie Description: ${film.overview}`}</p>
      </div>
    </div>
  );
}

export default FilmDetails;
