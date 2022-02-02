import React, { ReactNode } from 'react';

import { Container } from './styles';

interface SectionTitleProps {
  children?: ReactNode;
  title: string;
}

function SectionTitle({ children,title }: SectionTitleProps) {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

export default SectionTitle;
