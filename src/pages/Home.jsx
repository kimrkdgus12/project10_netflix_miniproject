import React from 'react'
import { useEffect } from "react"
import api from "../api"
import { useDispatch, useSelector } from 'react-redux';
import { movieActions } from '../redux/reducers/movieSlice';
import Banner from '../Components/Banner';
import MovieSlide from '../Components/MovieSlide';

const Home = () => {

    const dispatch = useDispatch()

    // popular / top_rated / upcoming 영화 데이터들 가져오기
    useEffect(() => {
        api.get("/movie/popular?language=en-US&page=1")
            .then(res => dispatch(movieActions.initDate({ popular: res.data.results, movie: "popular" })))
            .catch(err => console.error("Error fetching popular movies:", err));
        api.get("/movie/top_rated?language=en-US&page=1")
            .then(res => dispatch(movieActions.initDate({ top_rated: res.data.results, movie: "top_rated" })))
            .catch(err => console.error("Error fetching top_rated movies:", err));
        api.get("/movie/upcoming?language=en-US&page=1")
            .then(res => dispatch(movieActions.initDate({ upcoming: res.data.results, movie: "upcoming" })))
            .catch(err => console.error("Error fetching upcoming movies:", err));
    }, [dispatch])

    // 장르 목록 데이터 가져오기
    useEffect(() => {
        api.get("/genre/movie/list?language=ko")
            .then(res => dispatch(movieActions.initDate({ genre: res.data.genres })))
    }, [dispatch])


    const popularMovie = useSelector(state => state.movieList.popularMovies)[0] || null
    const topRatedMovie = useSelector(state => state.movieList.topRatedMovies)[0] || null
    const upcomingMovies = useSelector(state => state.movieList.upcomingMovies)[0] || null
    // console.log("popularMovie[0] :", popularMovie[0]);
    // console.log("popularMovie :", popularMovie);
    // console.log("topRatedMovie :", topRatedMovie);
    // console.log("upcomingMovies :", upcomingMovies);


    return (
        <div>
            {
                popularMovie ?
                    <Banner movie={popularMovie[0]}></Banner> :
                    (<p>Loading...</p>)
            }
            {
                popularMovie && topRatedMovie && upcomingMovies ?
                    <MovieSlide popularMovie={popularMovie} topRatedMovie={topRatedMovie} upcomingMovies={upcomingMovies}></MovieSlide> :
                    (<p>Loading...</p>)
            }

        </div>
    )
}

export default Home