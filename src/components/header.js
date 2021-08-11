import React from 'react';
import '../styles/App.scss';

function Header() {


  return (
    <div className="Header" id="header">
      <header className="Header-text">
        <h1>Hannah Norish<br />creates seamless websites<br />from beautiful<br />designs.</h1>
        <div className="Header-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.094 2.814l9.092 9.186-9.092 9.186-1.244-1.207 7.979-7.979-7.979-7.979 1.244-1.207zm.028-2.814l-4.122 4 8 8-8 8 4.122 4 11.878-12-11.878-12z"/></svg>
        </div>
      </header>
    </div>
  );
}

export default Header;