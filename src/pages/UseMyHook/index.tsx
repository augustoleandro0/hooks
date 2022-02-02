import React, { ReactNode } from 'react';

import { Container } from './styles';

interface UseMyHookProps {
  children: ReactNode;
}

function UseMyHook({ children }: UseMyHookProps) {
  return (
    <Container>
      <h1>UseMyHook</h1>
      {children}
    </Container>
  );
};

export default UseMyHook;
