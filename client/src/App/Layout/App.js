import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import './App.css';
import Login from '../../Features/SignUp-Login/Login';
import SignUp from '../../Features/SignUp-Login/SignUp';

import PokemonCard from '../../Features/PokemonList/PokemonCard/PokemonCard'
import Header from './header'
import HomePage from '../../Features/Home/Home';
import PokemonList from '../../Features/PokemonList/PokemonList';
import StaredPokemon from '../../Features/StaredPokemon/StaredPokemon';
import LoginRedirect from '../../Errors/LoginRedirect';


function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomePage/>} />
          <Route path='redirect' element={<LoginRedirect/>}/>
          <Route path='/' element={<Login/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path="/test" element={<PokemonCard/>} />
          <Route path="/pokemonList" element={<PokemonList/>} />
          <Route path="/pokemon/:id" element={<PokemonCard/>} />
          <Route path="/stared-pokemon" element ={<StaredPokemon/>} />
  
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
