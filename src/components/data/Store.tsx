import React, { ReactNode,createContext,useState } from 'react';

interface StoreProps {
  children: ReactNode;
}


const inicialState = {
    DDD: 21,
    number: 987655670,
    cidade: 'Rio de janeiro',
    setState: () => {}
   
   
}


export const AppCotext = createContext<any>(inicialState)


function Store({ children }: StoreProps) {
  const [state, setState] = useState(inicialState)

  function updateState(key: any, value: any){
    setState({
      ...state,
      [key]: value
    })
  }
  return (
    <>
      <AppCotext.Provider value={{
         DDD: state.DDD,
         number: state.number,
         cidade: state.cidade,
         setNumber: (n: any) => updateState('number',n),
         setText: (t: any) => updateState('text',t)
      }}>
        {children}
      </AppCotext.Provider>
    </>
  );
}

export default Store;
