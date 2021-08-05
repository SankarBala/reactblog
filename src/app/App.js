import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Figure from './body/figure/Figure';
import Slider from './body/Slider';
import Welcome from './body/Welcome';
import Footer from './footer/Footer';
import Header from './header/Header';
import Nav from './header/Nav';

function App() {
  return (
    <React.Fragment>
      <Router  basename={'/reactblogproduction/'}>
        <Header />
        <Nav />
        <Slider />
        <Welcome />
        <Figure />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
