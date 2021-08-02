import React from 'react';
import Slider from './body/Slider';
import Welcome from './body/Welcome';
import Header from './header/Header';
import Nav from './header/Nav';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Slider />
      <Welcome />
      <br />
  
    </React.Fragment>
  );
}

export default App;
