import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MoviesList } from "../index";
import { useSelector } from "react-redux";

export default function Movies() {
  const [page, setPage] = useState(1);
  const { genreOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreOrCategoryName,
    page,
  });

  if (isFetching) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
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
      </Box>
    );
  }

  if (error) return <>An error occurred</>;

  return (
    <div>
      <MoviesList movies={data} />
    </div>
  );
}
