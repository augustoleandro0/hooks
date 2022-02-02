
import {Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Exercicios from './pages/Exercicios'
import NotFound from './pages/NotFound'
import UseState from './pages/UseState'
import UseEffect from './pages/UseEffect'
import UseRef from './pages/UseRef'
import UseMemo from './pages/UseMemo'
import UseCallback from './pages/UseCallback'
import UseContext from './pages/UseContext'
import UseReducer from './pages/UseReducer'
import UseMyHook from './pages/UseMyHook'




export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Exercicios" element={<Exercicios/>}/>
            <Route path="/Exercicios/UseState" element={<UseState/>}/>
            <Route path="/Exercicios/UseEffect" element={<UseEffect/>}/>
            <Route path="/Exercicios/UseRef" element={<UseRef/>}/>
            <Route path="/Exercicios/UseMemo" element={<UseMemo/>}/>
            <Route path="/Exercicios/UseCallback" element={<UseCallback/>}/>
            <Route path="/Exercicios/UseContext" element={<UseContext/>}/>
            <Route path="/Exercicios/UseReducer" element={<UseReducer/>}/>
            <Route path="/Exercicios/UseMyHook" element={<UseMyHook/>}/>
            <Route path="*" element={< NotFound/>}/>
        </Routes>
    )
}