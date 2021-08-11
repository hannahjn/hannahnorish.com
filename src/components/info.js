import React from 'react';
import '../styles/App.scss';
import portrait from '../images/portrait.jpg';

class Info extends React.Component {

  render() {
    const { frameworks, languages } = this.props;
    return (
      <div className="Info">
        <div className="Info-inner" id="about">
          <div className="Info-wrapper">
            <div className="Info-portrait" style={{backgroundImage: `url(${portrait})`}}></div>
            <h2 className="Info-title">Bonjour/Hi</h2>
            <h3 className="Info-about">
              I'm Hannah, professional web developer and amateur bread baker - currently based in Montréal.
              <br/>
              <br/>
              Right now I'm  working at Pact, a small design and development agency of Shopify Experts, code nerds, and all-round good people.
              From ideation, through to design and development, we work with our clients to build A+ ecommerce sites that work for them.
              <br/>
              <br/>
              Check out my <a href="https://resume.creddle.io/resume/h01xyebzkzq" target="_blank" rel="noopener noreferrer">resumé</a> or send me an <a href="mailto:hi@hannahnorish.com" target="_blank" rel="noopener noreferrer">email</a> if you'd like to know more.
            </h3>
          </div>
          <div className="Info-wrapper">
            <div className="Info-detail">
              <h4 className="Info-detail-title">Languages</h4>
              <div className="Info-detail-list">
                {languages.map((lang) => (
                  <p className="Info-detail-info">{lang.title}</p>
                ))}
              </div>
            </div>
            <div className="Info-detail">
              <h4 className="Info-detail-title">Frameworks, Libraries & Softwares</h4>
              <div className="Info-detail-list">
                {frameworks.map((frame) => (
                  <p className="Info-detail-info">{frame.title}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
