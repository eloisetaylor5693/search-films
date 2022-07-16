import React from "react";
import { Film } from "../Film";
import "./FilmGenreSection.css";

interface FilmGenreSectionProps {
  filmList: Film[];
  genre: string;
}

function FilmGenreSection({
  filmList,
  genre,
}: FilmGenreSectionProps): JSX.Element {
  return (
    <>
      <h2 className="genre">{genre}</h2>

      <div className="film-list">
        {filmList
          .filter((x) => x.genres.includes(genre))
          .map((film: Film) => {
            return (
              <div key={film.id}>
                <img
                  src={film.backdrop}
                  alt={`${film.title} poster`}
                  height="200px"
                  width="300px"
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default React.memo(FilmGenreSection);
