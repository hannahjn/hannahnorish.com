import './App.css';
import React from 'react';
import Navbar from './components/navbar.js';
import StickyLinks from './components/sticky-links';
import Header from './components/header.js';
import Info from './components/info.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';


// project images
import illesteva from './images/illesteva.jpg';
import pista from './images/pista.jpg';
import camillette from './images/camillette.png';
import minimioche from './images/minimioche.jpeg';
import pixter from './images/pixter.jpg';
import studs from './images/studs.jpeg';
import gotenna from './images/gotenna.jpg';
import bark from './images/bark.jpeg';
import pehr from './images/pehr.jpeg';



function App() {

  const links = [
    { title: 'Info', url: '#about' },
    { title: 'Projects', url: '#projects' },
    { title: 'Contact', url: '#contact' }
  ]

  const languages = [
    { title: 'Javascript' },
    { title: 'JQuery' },
    { title: 'TypeScript' },
    { title: 'Ruby' },
    { title: 'Liquid' },
    { title: 'HTML' },
    { title: 'CSS' },
    { title: 'PHP' }
  ]

  const frameworks = [
    { title:'React' },
    { title:'Gatsby' },
    { title:'ExpressJS' },
    { title:'Node.js' },
    { title:'jQuery' },
    { title:'PostgreSQL' },
    { title:'MongooseDB' },
    { title:'Polaris' },
    { title:'GraphQL' },
    { title:'Laravel' },
    { title:'Sequel Pro'}
  ]

  const projects = [
    { title:'Studs', link: 'https://studs.com/', img: studs },
    { title:'Mini Mioche', link: 'https://www.minimioche.com/', img: minimioche },
    { title:'BarkBox, Australia', link: 'https://au.barkbox.com//', img: bark },
    { title:'goTenna', link: 'https://gotenna.com/', img: gotenna },
    { title:'Pehr', link: 'https://ca.shoppehr.com/', img: pehr },
    { title:'Illesteva', link: 'https://illesteva.com/', img: illesteva },
    { title:'Pixter', link: 'https://www.pixter.co/', img: pixter },
    { title:'Café Pista', link: 'https://www.cafepista.com/', img: pista },
    { title:'Camillette', link: 'https://camillette.com/', img: camillette },
  ]

  const contact = [
    { title: 'Github', value:'https://github.com/hannahjn' },
    { title: 'Resume', value:'https://resume.creddle.io/resume/h01xyebzkzq' },
    { title: 'LinkedIn', value:'https://resume.creddle.io/resume/h01xyebzkzq' }
  ]

  return (
    <div className="App">
      <Navbar links={links}/>
      <StickyLinks />

      <Header />
      <Info frameworks={frameworks} languages={languages} />
      <Projects projects={projects} />
      <Contact contact={contact} />

    </div>
  );
}

export default App;
