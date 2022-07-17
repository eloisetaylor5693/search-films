import React from "react";
import Header from "../components/Header";
import { Film } from "../Film";
import "./FilmDetails.css";

interface FilmDetailsProps {
  film: Film;
}

function FilmDetails({ film }: FilmDetailsProps): JSX.Element | null {
  if (!film) {
    return <h2>Sorry, can't find that film</h2>;
  }

  // Sometimes director is a string, sometimes it's an array
  const director =
    typeof film.director == "string"
      ? film.director
      : film.director?.join(", ");

  return (
    <>
      {/* not handling search from film details page atm */}
      <Header handleSearchInput={() => {}} />

      <div className="details-container">
        <img src={film.poster} alt={`${film.title} poster`} height="700px" />
        <div className="film-description">
          <h2>{`${film.title} (${film.imdb_rating})`}</h2>

          {/* 
            deserialisation of the date must have failed when this type was a date
            when I used `film.released_on.getFullYear` in src/templates/FilmDetails.tsx
            the value came out as undefined.  In a business app I'd try to keep strong typing where possible
         */}
          <p>{`${film?.released_on?.substring(0, 4)} | ${
            film.length
          } | ${director}`}</p>

          {/* Casing of cast in the design looks like a lowercase c */}
          <p>{`cast: ${film.cast.join(", ")}`}</p>
          <p>{`Movie Description: ${film.overview}`}</p>
        </div>
      </div>
    </>
  );
}

export default FilmDetails;
