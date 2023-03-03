import React, { useState } from "react";
import axios from "axios";

const ReviewCreate = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ReviewCreate;
