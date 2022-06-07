import React from "react";
import "../App.css";
import projectData from "../projects";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      {projectData.map((project) => (
        <div key={project.id}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <a href={project.github}>
            <img
              alt="github"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ihBnx-2JeyxrwMbSglJBdUh6XTyJNadzLQ&usqp=CAU"
            />
          </a>
          <a href={project.deployedSite}>Deployed Site</a>
        </div>
      ))}
    </div>
  );
}
