import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreOrCategory: "",
    page: 1,
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
