import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Movie({ movie, i }) {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={3} sx={{ padding: "10px" }}>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.primary,
          textOverflow: "ellipsis",
          width: "230px",
          whiteSpace: "nowrap",
          mt: "10px",
          mb: 0,
          textAlign: "center",
        }}
      >
        {movie.title}
      </Typography>
    </Grid>
  );
}

export default Movie;
