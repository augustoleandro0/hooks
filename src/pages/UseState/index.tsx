import React, { ReactNode,useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import TitleCard from '../../components/TitleCard';

import { Container, Contador, Formulario  } from './styles';

interface UseStateProps {
  children: ReactNode;
}

function UseState({ children }: UseStateProps) {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Sem nome')
  return (
    <Container>
      <TitleCard
        title='UseState' 
        about={`O que o useState faz? Ele declara um variável state. Nossa variável é chamada de count mas poderíamos chamar de qualquer coisa, como banana. Esta é uma maneira de “preservar” alguns valores entre as chamadas de funções — useState é uma nova maneira de usar as mesmas capacidades que o this.state tem em uma classe. Normalmente, variáveis “desaparecem” quando a função sai mas variáveis de state são preservadas pelo React.`}
      />
      <SectionTitle title={`Exemplo de useState 01`}/>
      <Contador>
          <h1>Contador</h1>
          <span>{count}</span>
         <div>
            <button onClick={()=> setCount(count + 1)}>+1</button>
            <button onClick={()=> setCount(count - 1)}>-1</button>
         </div>
      </Contador>
      <SectionTitle title={`Exemplo de useState 02`}/>
         <Formulario>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
         </Formulario>
      
    </Container>
  );
};

export default UseState;
