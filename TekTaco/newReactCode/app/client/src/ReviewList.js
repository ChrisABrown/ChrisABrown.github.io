import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ReviewList({ sku }) {
  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    //URL needs to be the same as controller to pull from database
    const res = await axios.get(`http://localhost:4002/menuItems/reviews`);
    setReviews(res.data);
  };

  useEffect(() => {
    fetchData();
  });

  const renderedReviews = reviews.map((review) => {
    return <li key={review.id}>{review.content}</li>;
  });

  return <ul>{renderedReviews}</ul>;
}
