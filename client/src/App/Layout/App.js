import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import './App.css';
import { Container } from 'react-bootstrap';
import PokemonCard from '../../Features/PokemonList/PokemonCard';
import Header from './header'


function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonCard/>} />
  
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
