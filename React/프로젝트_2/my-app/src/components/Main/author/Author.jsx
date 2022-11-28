import React from "react";
import "./author.css";

const Author = ({ userName, profileImg, created }) => {
  return (
    <dl class="author-wrap">
      <dt class="a11y-hidden">Author</dt>
      <dd class="author">
        <img
          src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true"
          alt=""
        />{" "}
        Chilli
      </dd>
      <dt class="a11y-hidden">Created</dt>
      <dd class="created">2022.05.25</dd>
    </dl>
  );
};

export default Author;
