export interface Film{
    id: string;
    title: string;
    backdrop: string;
    cast: string[];
    genres: string[];
    director: string;
    imdb_rating: number;
    length: string;
    released_on: Date;
    overview: string;
    poster: string;
    slug: string;
}