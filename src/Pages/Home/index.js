import React from 'react';
import './App.css';
import Navbar from '../../components/Navbar'
import HeaderTwo from '../../components/header'
import Times from '../../components/section1'
import Works from '../../components/Work'
import Shop from '../../components/Shop'
import Perfil from '../../components/Perfil'
import Footer from '../../components/Footer'
import { MdArrowForward } from 'react-icons/md'
import ScrollAnimation from 'react-animate-on-scroll';

function Home() {
  
  return (
    <div className="App">
      <header>
        <Navbar/>
        <div className="conteudo-header content-center">  
            <ScrollAnimation animateIn="fadeIn">
              <h1>Bem Vindo ao melhor site delivery</h1>
              <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível
                de uma página quando..</p>
              <ul>
                  <a href="">Saiba Mais</a>
              </ul>
            </ScrollAnimation>
        </div>   
      </header>

        <Times/>
        <HeaderTwo/>
        <Works/>
        <Shop/>
        {/* <Perfil/> */}
        <Footer/>
    </div>
  );
}

export default Home;
