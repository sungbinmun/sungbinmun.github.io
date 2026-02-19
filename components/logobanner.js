import { Box, Image, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const logos = [
  { src: '/images/logos/SNU_merged.svg', alt: 'SNU type', width: "200px", minW: "200px", link: "https://www.snu.ac.kr" },
  { src: '/images/logos/3dv_logo.png', alt: '3DV Logo', width: "120px", minW: "120px", link: "https://3d.snu.ac.kr" },
];

const LogoBanner = () => {
  return (
    <Box width="100%" py={4}>
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        gap={6}
        flexWrap="wrap"
      >
        {logos.map((logo, index) => (
          <Box key={index} mx={3} position="relative">
            {logo.link ? (
            <Link as={NextLink} href={logo.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                minW={logo.minW}
                objectFit="contain"
                filter="grayscale(100%)"
                transition="0.1s"
                _hover={{ filter: 'grayscale(0%)' }} // Turns color on hover
              />
            </Link>
            ): (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                minW={logo.minW}
                objectFit="contain"
                filter="grayscale(100%)"
                transition="0.1s"
                _hover={{ filter: 'grayscale(0%)' }} // Turns color on hover
              />
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default LogoBanner;
