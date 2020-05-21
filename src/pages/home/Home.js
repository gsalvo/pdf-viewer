import React from 'react';
import logo from '../../logo.svg';
import './home.css';



function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <p>
          Distintas opciones para visulizar pdf en aplicación <code>ReactJS</code>.
        </p>
      </header>
    </div>

  );
}

export default Home;
