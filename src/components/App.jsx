import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { Actors, MovieInformation, Movies, Navbar, Profile } from "./index";

export default function App() {
  return (
    <div>
      <CssBaseline />

      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actor/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}
