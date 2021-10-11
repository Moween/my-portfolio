import React, { useState, useEffect } from 'react';
import Project from '../../components/projectsComponent/Project';
import projects from '../../utils/data';
import sketchProjectImg from '../../images/etch-a-sketch_img.png';
import rockPaperProjectImg from '../../images/rock-paper-scissors.png';
import weatherProjectImg from '../../images/weather-app_img.png';
import fashionProjectImg from '../../images/mo-fashion-store_img.png';
import todoProjectImg from '../../images/todo_img.png';
import HeadingText from '../HeadingText';

const MyProjects = () => {
  const [projectData, setProjectData] = useState(projects);
  const projectsScreenShots = [
    weatherProjectImg,
    todoProjectImg,
    rockPaperProjectImg,
    fashionProjectImg,
    sketchProjectImg,
  ];

  useEffect(() => {
    setProjectData((prevProjects) => {
      const projects = prevProjects.map((project, index) => {
        project.imgUrl = projectsScreenShots[index];
        return project;
      });
      return projects;
    });
  }, []);

  return (
    <section className="project-section" id="projects">
      <HeadingText text="Projects" />
      {projectData.map((project, index) => (
        <Project key={project.id} projectData={project} index={index} />
      ))}
    </section>
  );
}

export default MyProjects;
