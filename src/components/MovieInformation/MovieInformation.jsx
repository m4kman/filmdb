import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useGetMovieQuery } from "../../services/TMDB";
import { Link, useParams } from "react-router-dom";

export default function MovieInformation() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  if (isFetching) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link to="/">Something went wrong. Click to go back.</Link>
      </Box>
    );
  }
  console.log(data);

  return <div>Movie Information {id}</div>;
}
