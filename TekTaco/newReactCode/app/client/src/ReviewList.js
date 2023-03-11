import React from "react";

export default function ReviewList({ reviews }) {
  const renderedReviews = reviews.map((review) => {
    return <li key={review.id}>{review.content}</li>;
  });

  return <ul>{renderedReviews}</ul>;
}
