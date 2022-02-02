import React, { ReactNode } from 'react';

import SectionTitle from '../../components/SectionTitle';
import TitleCard from '../../components/TitleCard';

import { Container } from './styles';

interface UseReducerProps {
  children: ReactNode;
}

function UseReducer({ children }: UseReducerProps) {
  return (
    <Container>
      <TitleCard title="useReducer" about={`useReducer é geralmente preferível em relação ao useState quando se tem uma lógica de estado complexa que envolve múltiplos sub-valores, ou quando o próximo estado depende do estado anterior. useReducer também possibilita a otimização da performance de componentes que disparam atualizações profundas porque é possível passar o dispatch para baixo, ao invés de callbacks.`}/>

      <SectionTitle title={`Exemplo de useReducer 01`}/>

      {children}
    </Container>
  );
};

export default UseReducer;
