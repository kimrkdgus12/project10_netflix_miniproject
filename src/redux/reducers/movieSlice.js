import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    genreList: []
}

export const movieSlice = createSlice({
    name: "movieList",
    initialState,
    reducers: {
        initDate(state, action) {
            // console.log("initDate", action.payload);
            if (action.payload.movie === "popular") {
                state.popularMovies.push(action.payload.popular)
            } else if (action.payload.movie === "top_rated") {
                state.topRatedMovies.push(action.payload.top_rated)
            } else if (action.payload.movie === "upcoming") {        
                state.upcomingMovies.push(action.payload.upcoming)
            } else {
                state.genreList = action.payload.genre
            }
        }
    }
})

export const movieActions = movieSlice.actions

export default movieSlice.reducer