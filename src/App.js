import React from 'react';
import './App.css';
import cart from './utilss/cart.svg';
import HeaderTwo from './components/header'
import Times from './components/section1'
import Works from './components/Work'
import Shop from './components/Shop'
import Perfil from './components/Perfil'
import Footer from './components/Footer'

import { MdArrowForward } from 'react-icons/md'

function App() {
  return (
    <div className="App">
      <header>
        <div className="main-header">
              <h1>FOOD</h1>
              <div className="nav-bar">
                <nav>
                  <ul>
                    <li className="li-1">Home</li>
                    <li>Packages</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li><img src={cart} alt="Carrinho"/> </li>
                  </ul>
                </nav>
                <button>Login</button>
              </div>
        </div> 
        <div className="conteudo-header">  
          <h1>Teste para ver a responsividade </h1>
          <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível
            de uma página quando..</p>
          
          <ul>
              <a href="">Ola<MdArrowForward className="arrow" /></a>
          </ul>
        </div>   
      </header>
      <Times/>
      <HeaderTwo/>
      <Works/>
      <Shop/>
      <Perfil/>
      <Footer/>
    </div>
  );
}

export default App;
