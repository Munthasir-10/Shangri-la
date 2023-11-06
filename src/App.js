import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Chef />
    <Gallery />
    <FindUs />
    <AboutUs />
    <Footer />
  </div>
);

export default App;
