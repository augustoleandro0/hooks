import React, {useState,useEffect } from 'react';
import TitleCard from '../../components/TitleCard';

import SectionTitle from '../../components/SectionTitle';

import { Container, Fatorial } from './styles';

function calcFatorial(num){
   const n = parseInt(num);
    if (n < 0) {
      return -1
    }if(n === 0){
       return 1
    }else{
       return calcFatorial(n - 1) * n
    }
}

function calcularResto(numero){
    const numb = parseInt(numero)
    if(numb % 2 === 0){
       return 'e par'
    }if(numb % 2 !== 0){
      return 'e impar'
    }
}

function UseEffect() {
  const [number, setNumber] = useState(0)
  const [fatorial, setFatorial] = useState(1)

  const [numb, setNumb] = useState(0)
  const [resto, setResto] = useState(1)

  useEffect(function(){
    setResto(calcularResto(numb))
  }, [numb])


  useEffect(function(){
    setFatorial(calcFatorial(number))
  }, [number])
 
  return (
    <Container>
     <TitleCard
        title='UseEffect' 
        about={`Aceita uma função que contém um código imperativo, possivelmente efetivo.

        Mutações, assinaturas, temporizadores, logs e outros side effects não são permitidos dentro do corpo principal de um componente funcional (React se refere a isso como render phase). Usá-los levará a erros confusos e inconsistências na UI.
        
        Em vez disso, use useEffect. A função passada para useEffect será executada depois que a renderização estiver disponível na tela. Pense em efeitos como um rota de fuga do mundo puramente funcional do React para o mundo imperativo.
        
        Por padrão, os efeitos são executados após cada renderização concluída, mas você pode optar por dispará-los somente quando determinados valores receberam atualização.`}
      />
      <SectionTitle title={`Exemplo de useEffect 01`}/>
      <Fatorial>
          <span>Fatorial</span>
          <div>
            <span>{fatorial === -1 ? 'Não existe' : fatorial}</span>
          </div>
          <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}/>
      </Fatorial>
      <SectionTitle title={`Exemplo de useEffect 02 (Desafio)`}/>
      <Fatorial>
          <span>Esse numero e par ou impar</span>
          <div>
            <span>{resto}</span>
          </div>
          <input type="number" min="0" value={numb} onChange={(e)=> setNumb(e.target.value)}/>
      </Fatorial>


    </Container>
  );
};

export default UseEffect;


