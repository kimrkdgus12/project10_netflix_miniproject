import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./reducers/movieSlice"

const store = configureStore({
    reducer: {
        movieList: movieReducer
    }
})


export default store