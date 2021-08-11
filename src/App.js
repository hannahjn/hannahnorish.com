import './App.css';
import React from 'react';
import Navbar from './components/navbar.js';
import Header from './components/header.js';


function App() {

  const links = [
    { title: 'Info', url: '#about' },
    { title: 'Projects', url: '#projects' },
    { title: 'Contact', url: '#contact' }
  ]
  return (
    <div className="App">
      <Navbar links={links}/>
      <Header />

    </div>
  );
}

export default App;
