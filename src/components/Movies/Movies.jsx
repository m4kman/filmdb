import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MoviesList } from "../index";

export default function Movies() {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: "20px",
      }}
    >
      <Typography variant="h4">
        No movies matched the search.
        <br />
        Please search for another movie.
      </Typography>
    </Box>;
  }

  if (error) return "An error occurred. ";

  return (
    <>
      <MoviesList movies={data} />
    </>
  );
}
