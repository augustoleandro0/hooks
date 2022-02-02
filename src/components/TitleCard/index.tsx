import React, { ReactNode } from 'react';

import { Container } from './styles';

interface TitleCardProps {
  children?: ReactNode;
  title: string;
  about: string
}

function TitleCard({ children,title,about }: TitleCardProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <h3>{about}</h3>
      {children}
    </Container>
  );
};

export default TitleCard;
