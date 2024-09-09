import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;

    return (
        <button
            style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'gray',  // 배경색을 회색으로 설정
                border: 'none',
                cursor: 'pointer',
                width: '30px',  // 버튼의 너비 설정
                height: '30px',  // 버튼의 높이 설정
                borderRadius: '50%',  // 원형 모양으로 만들기
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={onClick}
        >
            <span style={{ fontSize: '24px', color: "white" }}>➤</span>
        </button>
    );
};


const responsive = {
    superLargeDesktop: {
        // 이름은 자유롭게 지정할 수 있습니다. 
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const MovieSlide = ({ popularMovie, topRatedMovie, upcomingMovies }) => {
    return (
        <div style={{ position: 'relative' }}>
            <h1 style={{ marginTop: "30px" }}>Popular Movie</h1>
            <Carousel
                responsive={responsive}
                customRightArrow={< CustomRightArrow />}
            >
                {popularMovie.map(item => <MovieCard key={item.id} movie={item} />)}
            </Carousel>

            <h1>Top rated Movie</h1>
            <Carousel
                responsive={responsive}
                customRightArrow={< CustomRightArrow />}
            >
                {topRatedMovie.map(item => <MovieCard key={item.id} movie={item} />)}
            </Carousel>

            <h1>Upcoming Movie</h1>
            <Carousel
                responsive={responsive}
                customRightArrow={< CustomRightArrow />}
            >
                {upcomingMovies.map(item => <MovieCard key={item.id} movie={item} />)}
            </Carousel>
        </div>
    )
}

export default MovieSlide