import React, { ReactNode, useState, useMemo} from 'react';
import SectionTitle from '../../components/SectionTitle';
import TitleCard from '../../components/TitleCard';

import { Container, Input} from './styles';

interface UseMemoProps {
  children?: ReactNode;
}

function UseMemo({ children }: UseMemoProps) {
  
  function calc(a: number, b: number){
    const loading = Date.now() + 2000
    while (Date.now() < loading) {} //espera...
    return a + b
  }

  const [n1 , setN1] = useState<number>(0)
  const [n2 , setN2] = useState<number>(0)
  const [n3 , setN3] = useState<number>(0)

  const result = useMemo(() => calc(n1,n2),[n1, n2])
  return (
    <Container>
      <TitleCard title="useMemo" about={`Recebe uma função create e um array como argumentos. O useMemo só recuperará o valor memoizado quando o array receber uma atualização. Esta otimização ajuda a evitar cálculos caros em cada renderização.
      Lembre-se de que a função passada para useMemo será executa durante a renderização. Não faça nada lá que você normalmente não faria ao renderizar. Por exemplo, os side effects pertencem a useEffect, não à useMemo.`}/>

      <SectionTitle title={`Exemplo de useMemo 01`}/>

      <Input>
        <input type="number" min="0" value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
        <input type="number" min="0" value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
        <input type="number" min="0" value={n3} onChange={e => setN3(parseInt(e.target.value))}/>

        <span>{result}</span>
      </Input>
    </Container>

  );
};

export default UseMemo;
