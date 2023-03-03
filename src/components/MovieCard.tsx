import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMovie, Movie, removeMovie } from '../store/slices'
import { RootState, store } from '../store/store'
interface MovieCardProps {
    id: number,
    yts_url: string,
    title: string,
    year: number,
    rating: number,
    genre: string[],
    large_cover_image: string
}

const MovieCard: React.FC<MovieCardProps> = (props: MovieCardProps) => {
    const[includes,setIncludes] = useState(false)
    const dispatch = useDispatch();
    const likedMovies = useSelector((store: RootState) => store.likes.movies)

    const handleSaveButton = () => {
        if (likedMovies?.some((movie: Movie) => movie.id == props.id)) {
            dispatch(removeMovie(props.id))
            setIncludes(false)
        } else {
            dispatch(addMovie(props.id))
            setIncludes(true)
        }
    }
    return (
        <div className='w-fit max-w-64   scale-100 hover:scale-110 ease-in duration-300'>
            <img src={props.large_cover_image} alt="" className='w-64 border object-cover h-[400px] ' />
            {props.genre.map((genre) => (<span key={genre} className='p-2 text-sm font-light text-white-500 bg-yellow-500'>{genre}</span>))}
            <h1 className="text-2xl">{props.title}</h1><span >{props.rating}</span>
            <button className='float-right text-sm  text-green-500 p-2 bg-green-100 bg-opacity-20' onClick={handleSaveButton}>{includes ? "Unsave" :"Save"}</button>

        </div>
    )
}

export default MovieCard