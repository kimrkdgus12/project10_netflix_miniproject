import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import api from '../api';


const MovieDetail = () => {

    const [movieDetails, setMovieDetails] = useState(null);

    const location = useLocation()
    const { movie, genre } = location.state || {}
    // console.log(movie);
    // console.log(genre);

    useEffect(() => {
        api.get(`/movie/${movie.id}?language=en-US`)
            .then(res => {
                console.log("res :", res.data)
                setMovieDetails(res.data);
            })
            .catch(error => {
                console.error("Error fetching movie details:", error);
            });
    }, [])

    let imgUrl = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`

    if (!movieDetails) return null;


    ////////////////////////////////////////////////////////////////////////////////////////////////
    // 스타일 정의
    const containerStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '20px',
    };

    const imageStyle = {
        width: '40%',
        marginRight: '20px',
    };

    const detailsStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '60%',
    };

    const genresStyle = {
        marginBottom: '20px',
    };

    const infoStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////



    return (
        <div style={containerStyle}>
            <img src={imgUrl} alt={movieDetails.original_title} style={imageStyle} />
            <div style={detailsStyle}>
                <div style={genresStyle}>
                    {genre.map((item) => (
                        <Badge key={item} pill variant="secondary" style={{ marginRight: '5px' }}>
                            {item}
                        </Badge>
                    ))}
                </div>
                <h1>{movieDetails.original_title}</h1>
                <h5>{movieDetails.tagline}</h5>
                <div style={infoStyle}>
                    <span>{movie.release_date}</span>
                    <span>{movieDetails.runtime} min</span>
                    <span>{movieDetails.vote_average}/10</span>
                    <span>{movieDetails.adult ? "Adult" : "Not Adult"}</span>
                </div>
                <p>{movieDetails.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetail