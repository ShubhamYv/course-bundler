import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition';

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      {/* FOUNDER */}
      <Stack direction={['column', 'row']} spacing={['4', '16']} padding="8">
        <VStack>
          <Avatar
            src="https://avatars.githubusercontent.com/u/75082349?s=400&u=2eb2ded5dc117d94403a43c16c3dd028ef6759b4&v=4"
            boxSize={['38', '48']}
          />
          <Text children="Co-Founder" opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading children="Shubham Yadav" size={['md', 'xl']} />
          <Text
            textAlign={['center', 'left']}
            fontSize={['2xm', '2xl']}
            children={`Hi, I am a full-stack developer. My mission is to provide quality content at reasonable price.`}
          />
        </VStack>
      </Stack>

      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text
          fontFamily={'cursive'}
          fontSize={['3xm', '3xl']}
          m="8"
          textAlign={['center', 'left']}
        >
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      {/* Video player */}
      <Box>
        <video
          autoPlay
          muted
          loop
          controls
          src={introVideo}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </Box>

      {/* Terms And Conditions */}
      <Box>
        <Heading
          size={'md'}
          children="Terms and Condition"
          textAlign={['center', 'left']}
          my="4"
        />
        <Box h={'sm'} p="4" overflowY={'scroll'}>
          <Text
            letterSpacing={'widest'}
            fontFamily="heading"
            textAlign={['center', 'left']}
          >
            {termsAndCondition}
          </Text>

          <Heading
            my={'4'}
            size={['xs', 'md']}
            children="Refund only applicable for cancellation within 7 days."
          />
        </Box>
      </Box>

      {/* Payment */}
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={['xs', 'md']}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children="Payment is secured by Razorpay"
        />
      </HStack>
    </Container>
  );
};

export default About;
