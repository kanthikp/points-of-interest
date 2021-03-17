import { Box, Container } from '@material-ui/core';
import React from 'react';
import Search from './search';

export default function Main() {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" p={1} width={1} height="100vh">
        <Box height="20%">
          <Search
            onChange={(searchString: string) => {
              alert(searchString);
            }}
          />
        </Box>
        <Box height="50%">caurosel</Box>
        <Box height="30%">featured</Box>
      </Box>
    </Container>
  );
}
