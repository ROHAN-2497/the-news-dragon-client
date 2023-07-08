import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2> This is Our Terms</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti
        sed quisquam, nam quae dolorem, distinctio corporis, laborum ipsam harum
        minus odio nulla. Maiores sunt nobis pariatur dolore, commodi fugiat
        facere aut quod, iste, veniam suscipit repudiandae dignissimos quam
        reprehenderit? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
