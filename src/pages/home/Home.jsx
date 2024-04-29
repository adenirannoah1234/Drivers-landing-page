import React from 'react';
// import CustomNavbar from '../../components/Navbar';
import CustomNavbar from '../../components/navbar/Navbar';
import Services from '../../components/services/Services';
import About from '../../components/about/About';
import Hero from '../../components/hero/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <CustomNavbar />
      <About />
      <Services />
    </>
  );
};

export default Home;
