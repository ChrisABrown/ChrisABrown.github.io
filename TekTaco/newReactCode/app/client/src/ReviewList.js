import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ReviewList({ sku }) {
  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4002/menuItems/${sku}/reviews`
    );
    setReviews(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedReviews = reviews.map((review) => {
    return <li key={review._id}>{review.content}</li>;
  });

  return <ul>{renderedReviews}</ul>;
}
