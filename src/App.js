import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, Products } from './components';
import './App.css';

const App = () => (
  <div className='dark:text-white dark:bg-gray-800'>
    <Navbar />
    <Header />
    <Products />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
