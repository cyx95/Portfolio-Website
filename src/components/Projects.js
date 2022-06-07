import React from "react";
import "../App.css";
import projectData from "../projects";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">
        {projectData.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <img id="icon" alt="icon" src={project.picture} />
            <div id="description">
              <p>{project.description}</p>
              <div className="links-to-projects">
                <a href={project.github}>
                  <img
                    alt="github"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ihBnx-2JeyxrwMbSglJBdUh6XTyJNadzLQ&usqp=CAU"
                  />
                </a>
                <a href={project.deployedSite}>Deployed Site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
