export interface Film{
    id: string;
    title: string;
    backdrop: string;
    cast: string[];
    classification?: string;
    genres: string[];
    director: string | string[];
    imdb_rating: number;
    length: string;

    /**  deserialisation of the date must have failed when this type was a date
         when I used `film.released_on.getFullYear` in src/templates/FilmDetails.tsx
         the value came out as undefined.  In a business app I'd try to keep strong 
         typing where possible
    */
    released_on: string;
    
    overview: string;
    poster: string;
    slug: string;
}