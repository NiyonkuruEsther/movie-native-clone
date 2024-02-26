import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    madeForYouMovies: [],
    newReleasedMovies: [],
    upcomingMovies: []
  },
  reducers: {
    setPopularMovies(state, action) {
      state.popularMovies = action.payload;
    }
  }
});

export const { setPopularMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
