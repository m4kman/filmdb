import React from "react";
import { useGetMoviesQuery } from "../../services/TMDB";

export default function Movies() {
  const { data } = useGetMoviesQuery();

  console.log(data);

  return <div>Movies</div>;
}
