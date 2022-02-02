import React from 'react';

type UserType = {
  nome: string;
  email: string;
  id: number;
}


type propsUserContext = {
    state: UserType;
    setState: React.Dispatch<React.SetStateAction<UserType>>
  }
  


export const data = {
    state: {
      email: 'pedro@leandro.com',
      nome: 'Pedro Augusto dos Santos Leandro',
      id: 123
    },
    setState: () => {},
}


const DataContext = React.createContext<propsUserContext>(data)

export default DataContext