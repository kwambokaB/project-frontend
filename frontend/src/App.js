import React from 'react';
import Header from './components/header/header';
import Landing from './components/landing-page/landingpage';

import './App.css';

function App() {
  return (
    <div className="App container">
     <div className="container">
      <Header />
      </div>
      <div className="container">
        <Landing />
      </div>
    </div>
  );
}

export default App;
