import React, { useState } from 'react';
import { Box, IconButton, useBreakpointValue, Stack, Heading, Text, Container } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      image: '/cp-1.jpg',
    },
    {
      image: '/cp-2.jpg',
    },
    {
      image: '/cp-3.jpg',
    },
    {
      image: '/cp-4.jpg',
    },
    {
      image: '/cp-5.jpg',
    },
    {
      image: '/cp-6.jpg',
    },
    {
      image: '/cp-7.jpg',
    },
    {
      image: '/cp-8.jpg',
    },
    {
      image: '/cp-9.jpg',
    },
    {
      image: '/cp-10.jpg',
    },
  ];

  return (
    <Box position="relative" height="600px" width="full" overflow="hidden">
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height="3xl"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
            style={{ backgroundSize: '100%' }}           >
            {/* content div */}
            <Container size="container.lg" height="600px" position="relative" > 
              <Stack spacing={6} w="full" maxW="lg" position="absolute" top="50%" transform="translate(0, -50%)" >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>{card.title}</Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
