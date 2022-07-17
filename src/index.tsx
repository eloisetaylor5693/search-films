import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmDetails from "./templates/FilmDetails";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="film-details"
          element={
            <FilmDetails
              film={{
                id: "123",
                title: "hello",
                backdrop: "url.com",
                cast: ["Eloise"],
                genres: ["action", "drama"],
                director: "Eloise",
                imdb_rating: 4.9,
                length: "2 hours",
                released_on: new Date(2022, 5, 1),
                overview: "it's a nice film",
                poster: "url.com",
                slug: "slug-film-title",
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
