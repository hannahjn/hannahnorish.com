import React from 'react';
import '../styles/App.scss';

class ProjectCard extends React.Component {

  render() {
    const {
      project: {
        title,
        link,
        img
      }
    } = this.props;
    return (
      <div className="ProjectCard">
        <a className="ProjectCard-link" href={link}>
          <div className="ProjectCard-imageWrapper" style={{backgroundImage: `url(${img})`}}></div>
          <h4 className="ProjectCard-title">{title}</h4>
        </a>
      </div>
    );
  }
}

export default ProjectCard;
