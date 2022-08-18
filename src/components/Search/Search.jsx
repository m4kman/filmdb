import React, { useState } from "react";
import { Box, TextField, InputAdornment, Input } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../features/currentGenreOrCategory";

function Search() {
  const [query, setQuery] = useState("");
  const theme = useTheme();
  const dispatch = useDispatch();

  function handleKey(e) {
    if (e.key === "Enter") {
      dispatch(searchMovie(query));
    }
  }
  return (
    <Box
      sx={{
        [theme.breakpoints.down("sm")]: {
          display: "flex",
          justifyContent: "center",
          width: "100%",
        },
      }}
    >
      <TextField
        onKeyDown={handleKey}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        sx={{
          color: theme.palette.mode === "light" && "black",
          filter: theme.palette.mode === "light" && "invert(1)",
          [theme.breakpoints.down("sm")]: {
            mt: "-10px",
            mb: "10px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default Search;
