import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useGetGenreQuery } from "../../services/TMDB";

import { useDispatch } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

import genreIcons from "../../assets/genre";

// Logo config: fontsize - 50, san-serif, allerBd, concave-bottom (50)

import redlogo from "./redlogo.png";
import bluelogo from "./bluelogo.png";

function Sidebar() {
  const theme = useTheme();

  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];
  const { data, isFetching } = useGetGenreQuery();
  const dispatch = useDispatch();

  return (
    <>
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10% 0",
        }}
      >
        <Box
          component="img"
          src={theme.palette.mode === "light" ? bluelogo : redlogo}
          alt="FilmDB Logo"
          sx={{ width: "70%" }}
        />
      </Box>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Box
            key={value}
            component={Link}
            to="/"
            sx={{
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
          >
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(value))}
              button
            >
              <ListItemIcon>
                <Box
                  component="img"
                  src={genreIcons[value.toLowerCase()]}
                  height={30}
                  sx={{
                    filter:
                      theme.palette.mode === "light" ? "dark" : "invert(1)",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Box>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Box
              key={id}
              component={Link}
              to="/"
              sx={{
                color: theme.palette.text.primary,
                textDecoration: "none",
              }}
            >
              <ListItem
                onClick={() => dispatch(selectGenreOrCategory(id))}
                button
              >
                <ListItemIcon>
                  <Box
                    component="img"
                    src={genreIcons[name.toLowerCase()]}
                    height={30}
                    sx={{
                      filter:
                        theme.palette.mode === "light" ? "dark" : "invert(1)",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Box>
          ))
        )}
      </List>
    </>
  );
}

export default Sidebar;
