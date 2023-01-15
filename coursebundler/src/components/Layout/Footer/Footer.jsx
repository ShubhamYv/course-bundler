import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            children="@ Shubham Yadav "
            color={'yellow.400'}
            fontFamily="body"
            size={'sm'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a
            href="https://www.instagram.com/shubham.yv/"
            target={'blank'}
            rel="noreferrer"
          >
            <TiSocialInstagramCircular />
          </a>

          <a
            href="https://www.linkedin.com/in/shubham-yadav-04a1b0200/"
            target={'blank'}
            rel="noreferrer"
          >
            <TiSocialLinkedinCircular />
          </a>

          <a
            href="https://github.com/ShubhamYv"
            target={'blank'}
            rel="noreferrer"
          >
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
