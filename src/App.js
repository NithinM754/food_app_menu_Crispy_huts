// import logo from './logo.svg';
import './App.css';
import { MenuProvider } from './menu 1';
import Menu from './menu'
import Navbar from './nav';
// import { MenuContext } from './menu 1';
// import { useContext } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

     <Route path ='/menu'  element={ <Navbar/> } />
    </Routes>
    </BrowserRouter>
      <MenuProvider>
      <Menu/>
      </MenuProvider>
      </>
  );
}

export default App;
