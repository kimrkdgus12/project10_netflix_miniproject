import Badge from 'react-bootstrap/Badge';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    let url = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path}`;

    let genreList = useSelector(state => state.movieList.genreList, shallowEqual);
    // console.log("genre :", genre);
    // console.log("movie.genre",movie.genre_ids);

    const findGenreName = (genreId) => {
        const genre = genreList.find(g => g.id === genreId);
        return genre ? genre.name : 'Unknown';
    };


    return (
        <Link 
            to={`/movies/${movie.id}`}
            style={{ textDecoration: "none" }}
            state= {{
                movie: movie,
                genre: movie.genre_ids.map(item => findGenreName(item))
            }}
        >
            <div style={{
                position: "relative",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "300px",
                backgroundImage: `url(${url})`,
                overflow: "hidden",
            }}
                onMouseEnter={(e) => {
                    e.currentTarget.querySelector('.overlay').style.opacity = 1;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.querySelector('.overlay').style.opacity = 0;
                }}
            >
                <h4 style={{
                    color: "lightgreen",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    position: "relative",
                    zIndex: 2,
                }}>
                    {movie.original_title}
                </h4>
                <div className="overlay" style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    zIndex: 1,
                }}>
                    <h5>{movie.title}</h5>
                    <div style={{
                        display: "flex",
                        gap: "10px", // 각 Badge 사이의 간격 설정
                        justifyContent: "center", // 가로 정렬
                    }}>
                        {movie.genre_ids.map(item => (
                            <Badge key={item} bg="primary" style={{ margin: '2px' }}>
                                {findGenreName(item)}
                            </Badge>
                        ))}
                    </div>
                    <h5>평점 : {movie.vote_average}</h5>
                    <h5>{movie.adult ? "adult" : "not adult"}</h5>
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;