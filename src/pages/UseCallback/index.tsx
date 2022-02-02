import React, { ReactNode, useCallback, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import TitleCard from '../../components/TitleCard';


import { Container,Contador } from './styles';
import UseCallbackBtn from './UseCallbackBtn';

interface UseCallbackProps {
  children?: ReactNode;
}

function UseCallback({ children }: UseCallbackProps) {

    const [count ,setCount] = useState<number>(0)

      //com useCallback a função abaixo so sera renderizada uma unica independente do componente pai.
      const inc = useCallback((valor: number) => {
        setCount( current => current + valor )
    },[setCount])

  return (
    <Container>
        <TitleCard title="useCallback" about={`Recebe como argumentos, um callback e um array. useCallback retornará uma versão memoizada do callback que só muda se uma das entradas tiverem sido alteradas. Isto é útil quando utilizamos callbacks a fim de otimizar componentes filhos, que dependem da igualdade de referência para evitar renderizações desnecessárias (como por exemplo shouldComponentUpdate)`}/>

      <SectionTitle title={`Exemplo de useCallback 01`}/>

      <Contador>
          <span>{count}</span>
          <UseCallbackBtn inc={inc}/>
      </Contador>
    </Container>
  );
};

export default UseCallback;
