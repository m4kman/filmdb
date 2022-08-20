import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import genre from "../assets/genre";

export const tmdbAPIKey = import.meta.env.VITE_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ genreOrCategoryName, page, searchQuery }) => {
        if (searchQuery) {
          return `search/movie?query=${searchQuery}&api_key=${tmdbAPIKey}&page=${page}`;
        }
        if (genreOrCategoryName && typeof genreOrCategoryName === "string") {
          return `movie/${genreOrCategoryName}?api_key=${tmdbAPIKey}&page=${page}`;
        }

        if (genreOrCategoryName && typeof genreOrCategoryName === "number") {
          return `discover/movie?with_genres=${genreOrCategoryName}&page=${page}&api_key=${tmdbAPIKey}`;
        }

        return `movie/popular?page=1&api_key=${tmdbAPIKey}`;
      },
    }),
    getGenre: builder.query({
      query: () => {
        return `genre/movie/list?api_key=${tmdbAPIKey}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenreQuery } = tmdbApi;
