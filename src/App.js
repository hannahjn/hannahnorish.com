import './App.css';
import React from 'react';
import Navbar from './components/navbar.js';
import Header from './components/header.js';
import Info from './components/info.js';



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

  return (
    <div className="App">
      <Navbar links={links}/>
      <Header />
      <Info frameworks={frameworks} languages={languages} />

    </div>
  );
}

export default App;
