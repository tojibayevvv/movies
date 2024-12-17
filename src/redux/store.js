import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../redux/api/movie-api"
export const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat()
})