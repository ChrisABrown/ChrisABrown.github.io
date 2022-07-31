import React from "react";
import { useEffect, useState } from "react";
import MovieDataService from "../service/movies";
import { Link } from "react-router-dom";

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [ratings, setRatings] = useState(["All Ratings"]);
};
