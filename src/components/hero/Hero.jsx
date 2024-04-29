import React from 'react';
import { HStack, VStack, Image, Text, Flex, Center } from '@chakra-ui/react';

const Hero = () => {
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
          //   mb={70}
        >
          Swif<span style={{ color: '#4caf50' }}>drop</span>
        </Text>
        <Text
          fontWeight="400"
          mt={10}
          textAlign={{ base: 'center', md: 'auto' }}
        >
          Indulge in flexibility, seize freedom, and earn competitively as you
          deliver with SwifDrop. We offer top-notch payments to our riders.
          Download the Swifdrop riders mobile app now!
        </Text>
        <HStack mt={10}>
          <Image src="/Play Store.png" width={{ base: '120px', md: '200px' }} />
          <Image src="/App Store.png" width={{ base: '120px', md: '200px' }} />
        </HStack>
      </VStack>
      <Image src="/mockup.png" w={400} />
    </Flex>
  );
};

export default Hero;
