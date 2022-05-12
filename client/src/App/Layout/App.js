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
import HomePage from '../../Features/Home/Home';


function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/test" element={<PokemonCard/>} />
  
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
