import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Movie } from "../index";

export default function MoviesList({ movies }) {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        overflow: "auto",
        [theme.breakpoints.down("sm")]: {
          justifyContent: "center",
        },
      }}
    >
      {movies.results.map((movie, i) => (
        <Movie key={movie.id} movie={movie} i={i} />
      ))}
    </Grid>
  );
}
