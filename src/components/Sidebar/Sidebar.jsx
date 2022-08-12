import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

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
  const demoGenres = [
    { label: "Action", value: "action" },
    { label: "Adventure", value: "adventure" },
    { label: "Horror", value: "horror" },
    { label: "Sci-fi", value: "scifi" },
  ];

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
            <ListItem button>
              <ListItemText primary={label} />
            </ListItem>
          </Box>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoGenres.map(({ label, value }) => (
          <Box
            key={value}
            component={Link}
            to="/"
            sx={{
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
          >
            <ListItem button>
              <ListItemText primary={label} />
            </ListItem>
          </Box>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
