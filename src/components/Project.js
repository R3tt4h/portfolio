import './Project.css';
import React from 'react';
import ProjectCard from './ProjectCard';

function Project() {
    return (
        <section id="project">
            <div class="content-project">
                <div className = "space"></div>
                <h2 className=" project-title " data-aos="fade-up">Mes projets</h2>
                <ProjectCard/>
            </div>
        </section>
    );
  }
  
  export default Project;