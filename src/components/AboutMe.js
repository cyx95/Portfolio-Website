import React from "react";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMeDescription">
        <p id="greeting">
          Hello! My name is Chen Ying Xin but you can call me Ying
        </p>
        <p>
          I am a software engineer and a recent graduate of The GraceHopper
          Program at Fullstack Academy. Prior to becoming a software engineer, I
          worked in the hospitality industry as a waitress and food runner for
          6+ years.
        </p>
        <p>
          I've always had a profound interest in creating new things from
          scratch. I've always wondered how games were programed and how
          websites functionality worked. I finally saw my opportunity to pursue
          my interests when the pandemic hit. Jumping into this new chapter of
          my life was thrilling and exciting. I love being able to explore my
          creativity and build new applications from scratch.
        </p>
        <p id="main-skills">
          <strong>My main skills include:</strong>
        </p>
        <div className="frontend-skills">
          <ul>+ Javascript</ul>
          <ul>+ React</ul>
          <ul>+ Redux</ul>
          <ul>+ HTML5</ul>
          <ul>+ CSS</ul>
        </div>
        <div className="backend-skills">
          <ul>+ Node.js</ul>
          <ul>+ Express</ul>
          <ul>+ PostgreSQL</ul>
          <ul>+ Sequelize</ul>
        </div>
      </div>
      <div id="profile-pic-div">
        <img
          id="profile-pic"
          alt="profile-pic"
          src="https://avatars.githubusercontent.com/u/96203831?v=4"
        />
      </div>
    </div>
  );
}
