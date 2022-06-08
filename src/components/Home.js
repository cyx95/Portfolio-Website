import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-info">
        <p>Hi! I'm</p>
        <h1 className="fullname">Chen Ying Xin</h1>
        <p>A Software Engineer based in New York City</p>
      </div>
      <div className="profile">
        <img
          id="profile"
          alt="profile-pic"
          src="https://avatars.githubusercontent.com/u/96203831?v=4"
        ></img>
      </div>
    </div>
  );
}

export default Home;
