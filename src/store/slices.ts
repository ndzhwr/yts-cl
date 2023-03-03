import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, store } from './store';
import { useSelector } from 'react-redux';
export interface Movie {
    id: number;
    url: string;
    imdb_code: string;
    title: string;
    title_english: string;
    title_long: string;
    slug: string;
    year: number;
    rating: number;
    runtime: number;
    genres: string[];
    summary: string;
    description_full: string;
    synopsis: string;
    yt_trailer_code: string;
    language: string;
    mpa_rating: string;
    background_image: string;
    background_image_original: string;
    small_cover_image: string;
    medium_cover_image: string;
    state: string;
    torrents: Torrent[];
    date_uploaded: Date;
    date_uploaded_unix: number;
}

export interface Torrent {
    url: string;
    hash: string;
    quality: string;
    seeds: number;
    peers: number;
    size: string;
    size_bytes: number;
    date_uploaded: Date;
    date_uploaded_unix: number;
}

// error lens
const initialMovieState: { movies: Movie[] } = {
    movies  : []
}


export const moviesSlice = createSlice({
    name: 'movies',
    initialState: initialMovieState,
    reducers: {
        setMovies: (state, action: PayloadAction<Movie[]>) => {
            console.log(state.movies);
            state.movies = action.payload
            console.log(state.movies);
        },
        appendMovie: (state, action: PayloadAction<Movie>) => {
            const newstate = [...state.movies as Movie[], action.payload]
            state.movies = newstate;
        }
    }
})


export const likesSlice = createSlice({
    name: 'likes',
    initialState: initialMovieState,
    reducers: {
        addMovie: (state, action: PayloadAction<number>) => {
            // console.log(typeof state.movies);
            // const themovie =  state.movies.filter((movie  :Movie) => movie.id == action.payload)
            // const newstate =  [...state.movies as Movie[], ...themovie] as Movie[]
            // state.movies = newstate ;
            // console.log(state.movies);
            const movieToAdd = state.movies.find(movie => movie.id === action.payload);
            if (movieToAdd) {
                console.log("movieToAdd", movieToAdd);
                state.movies.push(movieToAdd);
            }
        },
        removeMovie: (state, action: PayloadAction<number>) => {
            //...
            const newMovies = state.movies?.filter(movie => movie.id !== action.payload) as Movie[]
            state.movies = newMovies
        }
    }
})

export const { setMovies, appendMovie } = moviesSlice.actions
export const { addMovie, removeMovie } = likesSlice.actions