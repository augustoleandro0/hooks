import React, { ReactNode } from 'react';
import TitleCard from '../../components/TitleCard';

import { Container } from './styles';

interface HomeProps {
  children: ReactNode;
}

function Home({ children }: HomeProps) {
  return (
    <Container>
     <TitleCard 
      title="React Hooks"
      about={`Se Hooks é novidade pra você, talvez você queira primeiro ter uma visão geral de como funcionam os Hooks. Você também pode procurar informações úteis na seção de perguntas mais frequentes.`}
     />

      {children}
    </Container>
  );
};

export default Home;
