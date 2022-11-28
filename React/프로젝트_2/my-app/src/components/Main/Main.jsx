import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./main.css";
import About from "./about/About";
import Posts from "./posts/Posts";
import UserContext from "../../context/UserContext";

const Main = () => {
  const { isLogin } = useContext(UserContext);
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json"
      )
      .then((json) => {
        console.log(json);
        setPosts(json.data);
      });
  }, []);

  return (
    <main>
      {posts === undefined ? (
        <></>
      ) : (
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <ul className="posts">
            {/* components array로 생성 */}
            <Posts posts={posts} />
          </ul>
          {isLogin ? <About /> : <></>}
        </div>
      )}
    </main>
  );
};

export default Main;
