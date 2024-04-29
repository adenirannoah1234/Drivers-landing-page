import React from 'react';
import { HStack, VStack, Image, Text, Flex, Center } from '@chakra-ui/react';
import AOS from 'aos';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <Flex
      mt={{ md: '40', base: '20' }}
      gap={{ md: '20', base: '0' }}
      py={5}
      px={{ base: '5', md: '10' }}
      //   align={{ md: 'auto', base: 'center' }}
      flexDirection={{ md: 'row', base: 'column' }}
    >
      <VStack mb="40">
        <Text
          as="h1"
          fontSize={{ md: '8rem', base: '4rem' }}
          fontWeight="400"
          fontFamily="Pacifico, cursive"
          data-aos="fade-right"
          //   mb={70}
        >
          Swif<span style={{ color: '#4caf50' }}>drop</span>
        </Text>
        <Text
          fontWeight="400"
          mt={10}
          textAlign={{ base: 'center', md: 'auto' }}
          data-aos="fade-bottom"
        >
          Indulge in flexibility, seize freedom, and earn competitively as you
          deliver with SwifDrop. We offer top-notch payments to our riders.
          Download the Swifdrop riders mobile app now!
        </Text>
        <HStack mt={10} data-aos="fade-bottom">
          <Image src="/Play Store.png" width={{ base: '120px', md: '200px' }} />
          <Image src="/App Store.png" width={{ base: '120px', md: '200px' }} />
        </HStack>
      </VStack>
      <Image data-aos="fade-right" src="/mockup.png" w={400} />
    </Flex>
  );
};

export default Hero;
