import React from 'react';
import ProjectCard from './project_card';
import '../styles/App.scss';

class Projects extends React.Component {

  render() {
    const { projects } = this.props;
    return (
      <div className="Projects" id="projects">
        <h2 className="Projects-header">Selected Projects</h2>
        <div className="Projects-wrapper">
          {projects.map((proj, idx) => (
            <ProjectCard project={proj} id={idx}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
