import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import './App.css';

import PokemonCard from '../../Features/PokemonList/PokemonCard/PokemonCard'
import Header from './header'
import HomePage from '../../Features/Home/Home';
import PokemonList from '../../Features/PokemonList/PokemonList';


function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/test" element={<PokemonCard/>} />
          <Route path="/pokemonList" element={<PokemonList/>} />
          <Route path="/pokemon/:id" element={<PokemonCard/>} />
  
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
