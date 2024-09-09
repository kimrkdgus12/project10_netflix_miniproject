import React from 'react'

const Banner = ({ movie }) => {

    if (!movie) return null;  // movie 값이 없으면 렌더링하지 않음 !

    let url = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`

    return (
        <div style={{
            backgroundSize: "cover",
            height: "400px",
            backgroundImage: `url(${url})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
        }}>
            <h1 style={{
                color: "white",
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "20px",
                textAlign: "center"
            }}>
                {movie.title}
            </h1>
            <p style={{
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
                maxWidth: "60%",
                textAlign: "center"
            }}>
                {movie.overview}
            </p>
        </div>
    )
}

export default Banner