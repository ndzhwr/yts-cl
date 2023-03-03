import { configureStore } from "@reduxjs/toolkit";
import { likesSlice, moviesSlice } from "./slices";

export const store  = configureStore({
    reducer :{
        movies : moviesSlice.reducer ,
        likes : likesSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
