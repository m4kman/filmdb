import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbAPIKey = import.meta.env.VITE_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => {
        return `movie/popular?page=1&api_key=${tmdbAPIKey}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
