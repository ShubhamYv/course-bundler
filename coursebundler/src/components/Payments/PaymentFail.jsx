import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h="90vh">
      <VStack justifyContent={'center'} spacing="4" h="full">
        <RiErrorWarningFill size={'5rem'} />
        <Heading textTransform={'uppercase'} children="Payment Fail" />
        <Link to={'/subscribe'}>
          <Button variant={'ghost'}>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
