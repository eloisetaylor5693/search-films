import React from "react";
import Header from "../components/Header";
import { Film } from "../Film";
import "./FilmDetails.css";

interface FilmDetailsProps {
  film: Film;
}

function FilmDetails({ film }: FilmDetailsProps): JSX.Element | null {
  if (!film) {
    return <h2>Sorry, can't find  that film</h2>;
  }

  return (
    <>
      <Header />

      <div className="details-container">
        <img src={film.poster} alt={`${film.title} poster`} height="700px" />
        <div className="film-description">
          <h2>{`${film.title} (${film.imdb_rating})`}</h2>
          <p>{`${film.released_on.getFullYear} | ${film.length} | ${film.director}`}</p>
          <p>{`cast: ${film.cast.join(", ")}`}</p>
          <p>{`Movie Description: ${film.overview}`}</p>
        </div>
      </div>
    </>
  );
}

export default FilmDetails;
