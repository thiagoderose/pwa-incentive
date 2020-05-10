import React from 'react';

import Box from '@livip/core/Box';
import Container from '@livip/core/Container';
import Title from '@livip/core/Title';

// import ServiceInformation from '../../components/ServiceInformation';
import messages from './messages';

const LastProjects = () => {
  const title = {
    variant: 'h2',
    message: messages.title,
  };

  return (
    <Box bgcolor="grey.lighter">
      <Container>
        <Title
          title={title}
          align="center"
        />
      </Container>
    </Box>
  );
};

export default LastProjects;
