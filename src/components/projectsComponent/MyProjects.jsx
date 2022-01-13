import React, { useState } from 'react';
import Project from '../../components/projectsComponent/Project';
import projects from '../../utils/data';
import betTipsImg from '../../images/bettips_img.png';
import rockPaperProjectImg from '../../images/rock-paper-scissors.png';
import weatherProjectImg from '../../images/weather-app_img.png';
import fashionProjectImg from '../../images/mo-fashion-store_img.png';
import todoProjectImg from '../../images/todo_img.png';
import HeadingText from '../HeadingText';

const MyProjects = () => {
  const [projectData] = useState(projects);
  const projectsScreenShots = [
    betTipsImg,
    weatherProjectImg,
    fashionProjectImg,
    todoProjectImg,
    rockPaperProjectImg,
  ];

  return (
    <section className="project-section" id="projects">
      <HeadingText text="Projects" />
      {projectData.map((project, index) => (
        <Project
          key={project.id}
          projectData={project}
          index={index}
          imgUrl={projectsScreenShots[index]}
        />
      ))}
    </section>
  );
};

export default MyProjects;
