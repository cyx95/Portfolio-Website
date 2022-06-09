import React from "react";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <p>Hello! My name is Chen Ying Xin but you can call me</p>
      <h2>Ying</h2>
      <p>
        I am a software engineer and a recent graduate of The GraceHopper
        Program at Fullstack Academy. Prior to becoming a software engineer, I
        worked in the hospitality industry as a waitress and food runner for 6+
        years.
      </p>
      <p>
        I've always had a profound interest in creating new things from scratch.
        I've always wondered how games were programed and how websites
        functionality worked. I finally saw my opportunity to pursue my
        interests when the pandemic hit. Jumping into this new chapter of my
        life was thrilling and exciting. I love being able to explore my
        creativity and build new applications from scratch.
      </p>
      <p>
        I’m looking forward to exploring full stack roles where I can be part of
        a small team with lots of mentorship, and help build web applications
        that people can utilize and benefit from.
      </p>
      <p>My main skills include:</p>
      <div className="frontend-skills">
        <h4>FrontEnd</h4>
        <p>Javascript • React • Redux • HTML5 • CSS</p>
      </div>
      <div className="backend-skills">
        <h4>BackEnd</h4>
        <p>Node.js • Express • PostgreSQL • Sequelize</p>
      </div>
    </div>
  );
}
