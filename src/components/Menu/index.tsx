import React, { ReactNode } from 'react';

import { Link } from 'react-router-dom';

import { Container,Dropdown,Exercicios} from './styles';

interface MenuProps {
  children?: ReactNode;
}

function Menu({ children }: MenuProps) {
  return (
    <Container>
      <nav>
        <ul style={{display: 'flex'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Exercicios>
                <Link to="/exercicios">Exercicios</Link>
                <Dropdown>
                  <ul>
                    <li>
                      <Link to="/exercicios/usestate">useState</Link>
                    </li>
                    <li>
                      <Link to="/exercicios/useeffect">useEffects</Link>
                    </li>
                    <li>
                      <Link to="/exercicios/useref">useRef</Link>
                    </li>
                    <li>
                      <Link to="/exercicios/usememo">useMemo</Link>
                    </li>
                    <li>
                      <Link to="/exercicios/useCallback">useCallback</Link>
                    </li>
                    <li>
                      <Link to="/exercicios/usecontext">useContext</Link>
                    </li>
                    <li>
                      <Link to="/exercicios/usereducer">useReducer</Link>
                    </li>
                    <li>
                      <Link to="/exercicios/usemyhook">useMyHook</Link>
                    </li>
                  </ul>
                </Dropdown>
              </Exercicios>
          </li>
        </ul>
      </nav>  
      {children}
    </Container>
  );
};

export default Menu;
