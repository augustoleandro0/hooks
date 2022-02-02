import React, { ReactNode } from 'react';

import { Container } from './styles';

interface NotFoundProps {
  children: ReactNode;
}

function NotFound({ children }: NotFoundProps) {
  return (
    <Container>
      <h1>Not Found</h1>
      <h2>Erro 404 ...Pagina não encontrada</h2>
      {children}
    </Container>
  );
};

export default NotFound;
