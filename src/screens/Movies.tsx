import React from 'react'
import { RootState, store } from '../store/store'
import { useFetch } from '../hooks/useFetch'
import { Movie } from '../store/slices'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies as globalSetMovies } from '../store/slices'
import MovieCard from '../components/MovieCard'
const Movies = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    (async function () {
      const movies = await useFetch('https://yts.mx/api/v2/list_movies.json')
      dispatch(globalSetMovies(movies))
    }())
  }, [])
  const storedMovies = useSelector((state: RootState) => state.movies.movies)
  return (
    <div>
      <div className="banner backdrop-blur-md py-24" style={{
        backgroundImage: `url('/scr14979r.webp')`
      }}>
        <h1 className='home-title text-white text-6xl  text-center  px-40'>The home of movies and series, made for you</h1>
        <p className='text-xl text-center opacity-75 font-light mt-10'>Explore as much as you can</p>
        <div className="w-fit mx-auto mt-20"> <button className='py-4 px-6 bg-green-500 text-white font-light hover:bg-green-600 mx-auto  text-xl border-opacity-50 '>Explore movies</button></div>
      </div>

      <h1 className='text-4xl my-6'>Latest movies</h1>
      <div className='grid grid-cols-4 gap-4  flex-wrap '>
        { storedMovies&& storedMovies.map((movie) => (<MovieCard key={movie.id} id={movie.id} title={movie.title} yts_url={movie.url} year={movie.year} rating={movie.rating} genre={movie.genres} large_cover_image={movie.medium_cover_image}  />))}
      </div>
    </div>
  )
}

export default Movies