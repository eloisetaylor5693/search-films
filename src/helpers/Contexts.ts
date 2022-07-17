import React from "react";
import { Film } from "../Film";

export const FilmResultsContext = React.createContext<Film[]>([]);
export const GenreResultsContext = React.createContext<string[]>([]);
export const CurrentSearchContext = React.createContext<string|null>(null);