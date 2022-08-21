import React from "react";
import { CssBaseline, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import { Actors, MovieInformation, Movies, Navbar, Profile } from "./index";

export default function App() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", height: "100%", flexWrap: "wrap" }}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          width: "calc(100% - 240px)",
          flexGrow: 1,
          padding: "2em",
        }}
      >
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actor/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
}
