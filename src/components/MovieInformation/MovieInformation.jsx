import React from "react";
import { Box, CircularProgress, Grid, Typography, Rating } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useGetMovieQuery } from "../../services/TMDB";
import { Link, useParams } from "react-router-dom";

import genreIcons from "../../assets/genre";

export default function MovieInformation() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const theme = useTheme();
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

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        margin: "10px 0 !important",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          flexWrap: "wrap",
        },
      }}
    >
      <Grid item sm={12} lg={4}>
        <Box
          component="img"
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
          sx={{
            borderRadius: "20px",
            boxShadow: "0.5em 1em 1em rgb(64, 64, 70)",
            width: "80%",
            [theme.breakpoints.down("md")]: {
              margin: "0 auto",
              width: "50%",
              height: "350px",
            },
            [theme.breakpoints.down("sm")]: {
              margin: "0 auto",
              width: "100%",
              height: "350px",
              marginBottom: "30px",
            },
          }}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data.release_date.split("-")[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0 !important",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              flexWrap: "wrap",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Rating readOnly value={data.vote_average / 2} />
            <Typography
              variant="subtitle1"
              sx={{ ml: "10px", alignSelf: "center", mt: "2px" }}
            >
              {data?.vote_average} / 10
            </Typography>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime}min{" "}
            {data?.spoken_languages.length > 0
              ? `/ ${data?.spoken_languages[0].name}`
              : ""}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            margin: "10px 0 !important",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {data?.genres?.map((genre) => (
            <Box
              component={Link}
              key={genre.name}
              to="/"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                [theme.breakpoints.down("sm")]: {
                  padding: "0.5rem 1rem",
                },
              }}
            >
              <Box
                component="img"
                src={genreIcons[genre.name.toLowerCase()]}
                height={30}
                sx={{
                  filter: theme.palette.mode === "light" ? "dark" : "invert(1)",
                  mr: "10px",
                }}
              />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
