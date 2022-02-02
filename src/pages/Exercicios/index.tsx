import React, { ReactNode } from 'react';

import { Container } from './styles';

interface ExerciciosProps {
  children: ReactNode;
}

function Exercicios({ children }: ExerciciosProps) {
  return (
    <Container>
      <h1>Exercicios</h1>
      {children}
    </Container>
  );
};

export default Exercicios;
