import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './Home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.webp';
import { CgGoogle, CgInstagram } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';

const home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing="8"
          >
            <Heading
              textAlign={['center', 'left']}
              children="LEARN FROM THE EXPERTS"
              size={'2xl'}
            />
            <Text
              textAlign={['center', 'left']}
              children="Find Valuable Content At Reasonable Price"
              fontSize={'2xl'}
              fontFamily="cursive"
            />
            <Link to="/courses" />
            <Button size={'lg'} colorScheme="yellow">
              Explore Now
            </Button>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            // objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children={'OUR BRANDS'}
        />

        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgInstagram />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          controls
          src={introVideo}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default home;
