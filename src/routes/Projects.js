import React from 'react'
import projects from "../components/Projects/Project.json";
import ProjectCard from "../components/ProjectCard";


function ProjectGallery() {
  return (
    <div className="row">
      <div className="col-12">
      <h1 className='m-auto'>ProjectGallery</h1>
      <h3 className="prompt text-center m-auto">
       These are all the challenges and projects done during the bootcamp and beyond it. The latest work is the portfolio of my brother.
       I used all the recent technologies in particular Javascript, React, Vite and the classic HTML and CSS.
       Please have a look , I would appreciate your honest feedback and ways to improve. 
      
       </h3>
      </div>
      
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            name={project.name}
            deployedLink={project.deployedLink}
            gitHubLink={project.gitHubLink}
            image={project.image}
          />
      ))}      
      
    </div>
  );
}

export default ProjectGallery;



