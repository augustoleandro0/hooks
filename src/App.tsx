import React,{useState} from 'react';
import './App.css';

import Routes from './routes';
import Menu from './components/Menu';
import DataContext,{data} from './components/data/dataContext'
import Store from './components/data/Store';




function App() {
  const [state, setState] = useState(data.state)
  return (
    <Store>
      <DataContext.Provider value={{state, setState}}>
        <div className="App">
            <Menu/>
            <Routes/>
        </div>
      </DataContext.Provider>
    </Store>
  );
}

export default App;
