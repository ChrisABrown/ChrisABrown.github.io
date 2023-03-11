import React, { useState } from "react";
import axios from "axios";
import ReviewList from "./ReviewList";

const ReviewCreate = ({ reviews }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    await axios.post(`http://localhost:4002/menuitems/reviews`, {
      content,
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Comment here</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-secondary">Submit</button>
      </form>
    </div>
  );
};

export default ReviewCreate;
