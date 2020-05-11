import React from 'react';
import './styles.css'
import chiken from '../../utilss/chiken.svg'
import fast from '../../utilss/fast.svg'
import toque from '../../utilss/toque.svg'

function Work() {
  return (
    <div className="component-work">
      <span>Work</span>
      <h1>Como trabalhamos</h1>
      <p>Nossa metodoliga de entrega é muito reconhecida pelos seguintes itens</p>  
      <div className="times-work">
        <div className="carts-work">
            <img src={chiken} alt=""/>
            <h1>Refeição Facil</h1>
            <p>Lorem Ipsum é simplesmente uma simulação de 
              texto da indústria tipográfica e de impressos</p>
        </div>
        <div className="carts-work">
            <img src={toque} alt=""/>
            <h1>Flexibilidade</h1>
            <p>Lorem Ipsum é simplesmente uma simulação de texto da 
              indústria tipográfica e de impresso</p>
        </div>
        <div className="carts-work">
            <img src={fast} alt=""/>
            <h1>Entrega Rápida</h1>
            <p>Lorem Ipsum é simplesmente uma
               simulação de texto da indústria tipográfica e de impressos</p>
        </div>
    </div>
    </div>
  );
}

export default Work;