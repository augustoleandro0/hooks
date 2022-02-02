import React, { ReactNode,useState,useRef, useEffect} from 'react';
import SectionTitle from '../../components/SectionTitle';
import TitleCard from '../../components/TitleCard';


import { Container, Formulario } from './styles';

interface UseRefProps {
  children?: ReactNode;
}

function UseRef({ children }: UseRefProps) {

  function merge(s1: string, s2: string) {
    //converçao de uma string em array e pegando seus indices e concatenando
      return [...s1].map(function( e , i){
          return `${e}${s2[i] || " "}`;
      }).join("")
  }
  const [valor1, setValor1] = useState<string>('')
  const [valor2, setValor2] = useState<string>('')

  const count = useRef(0)
  const input1 = useRef<any>(null)
  const input2 = useRef<any>(null)

   useEffect( function(){
        count.current++
        input2.current.focus()
      },[valor1])

  useEffect( function(){
        count.current++
        input1.current.focus()
      },[valor2])
  return (
    <Container>
     <TitleCard
        title='UseRef' 
        about={`useRef retorna um objeto ref mutável, no qual a propriedade .current é inicializada para o argumento passado (initialValue). O objeto retornado persistirá durante todo o ciclo de vida do componente.`}
      />
      <SectionTitle title={`Exemplo de useRef 01`}/>
      <Formulario>
            <div style={{color: '#53ac6a', fontSize: '50px'}}>
            <span>valor</span>
            <span> {merge(valor1,valor2)} </span>
            <span>[</span>
            <span>{count.current}</span>
            <span>]</span>
          </div>
     
          <input type="text" ref={input1} value={valor1} onChange={e => setValor1(e.target.value)}/>
      </Formulario>
      <SectionTitle title={`Exemplo de useRef 02`}/>
      <Formulario>
           
          <input type="text" ref={input2} value={valor2} onChange={e => setValor2(e.target.value)}/>
      </Formulario>
      {children}
    </Container>
  );
};

export default UseRef;
