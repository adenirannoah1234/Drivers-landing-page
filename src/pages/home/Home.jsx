import React from 'react';
import { Box } from '@chakra-ui/react';
// import CustomNavbar from '../../components/Navbar';
import CustomNavbar from '../../components/navbar/Navbar';
import Services from '../../components/services/Services';
import About from '../../components/about/About';
import Hero from '../../components/hero/Hero';

const Home = () => {
  return (
    <>
      <CustomNavbar />
      <Box position="relative">
        <About />
        <Hero />
      </Box>
      <Services />
    </>
  );
};

export default Home;
