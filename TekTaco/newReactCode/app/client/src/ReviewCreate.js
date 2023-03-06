import React, { useState } from "react";
import axios from "axios";

const ReviewCreate = ({ sku }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.prevent.default();
    await axios.post(`http://localhost:4002/menuItems/${sku}/reviews`, {
      content,
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">New Review</label>
          <input
            value={content}
            onChange={(e) => e.target.value}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary"></button>
      </form>
    </div>
  );
};

export default ReviewCreate;
