import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
 h1 {
 color: red;
 }
`;

export const Index = () => {
  return (
    <StyledApp>
      <h1>Next PWA</h1>
    </StyledApp>
  );
};

export default Index;
