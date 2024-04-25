import React from 'react';
import CustomNavbar from '../components/Navbar';
import Services from '../components/services/Services';
import About from '../components/about/About';

const Home = () => {
  return (
    <>
      <CustomNavbar />
      <About />
      <Services />
    </>
  );
};

export default Home;
