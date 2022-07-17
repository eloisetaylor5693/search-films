import FilmDetails from "../templates/FilmDetails";
import { useLocation } from "react-router-dom";

const RoutedFilmDetails = () => {
  const { state } = useLocation();

  return <FilmDetails film={state} />;
};

export default RoutedFilmDetails;
