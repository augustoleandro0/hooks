import React, {ReactNode, useContext} from 'react';
import SectionTitle from '../../components/SectionTitle';
import TitleCard from '../../components/TitleCard';

import { Container, Perfil} from './styles';

import DataContext from '../../components/data/dataContext'
import { AppCotext } from '../../components/data/Store';

interface UseContextProps {
  children?: ReactNode;
}



function UseContext({ children }: UseContextProps) {

  const context = useContext(DataContext)

  function addNumber(delta: number) {
    context.setState({
      ...context.state,
      id: context.state.id + delta
    })
  }

  const {number , setNumber} = useContext(AppCotext)

 
  return (
    <Container>
        <TitleCard title="useContext" about={`Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto. O valor de contexto atual é determinado pela prop value do<MyContext.Provider>mais próximo acima do componente de chamada na árvore`}/>

        <SectionTitle title={`Exemplo de useContext 01`}/>

        <Perfil>
          <h1>Dados do usuario</h1>
          <div>
            <span>nome: {context.state.nome}</span>
            <span>email: {context.state.email}</span>
            <span>ID: {context.state.id}</span>
            <div>
              <button type="button" onClick={e => addNumber(1) }>+1</button>
              <button type="button" onClick={e => addNumber(-1) }>-1</button>
            </div>
          </div>
        </Perfil>

        <SectionTitle title={`Exemplo de useContext 02`}/>

        <Perfil>
          <div>
            <span>{number}</span>
            <button type="button" onClick={e => setNumber(number + 1) }>+1</button>
            <button type="button" onClick={e => setNumber(number -1) }>-1</button>
          </div>
        </Perfil>

      {children}
    </Container>
  );
};

export default UseContext;
