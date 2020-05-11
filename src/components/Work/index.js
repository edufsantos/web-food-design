import React from 'react';
import './styles.css'
import chiken from '../../utilss/chiken.svg'
import fast from '../../utilss/fast.svg'
import toque from '../../utilss/toque.svg'

function Work() {
  return (
    <div className="component-work">
      <span>Work</span>
      <h1>How it Works</h1>
      <p>The href attribute requires a valid value to be accessible.</p>  
      <div className="times-work">
        <div className="carts-work">
            <img src={chiken} alt=""/>
            <h1>Pick Meals</h1>
            <p>Lorem Ipsum é simplesmente uma simulação de 
              texto da indústria tipográfica e de impressos</p>
        </div>
        <div className="carts-work">
            <img src={toque} alt=""/>
            <h1>Choose How Often</h1>
            <p>Lorem Ipsum é simplesmente uma simulação de texto da 
              indústria tipográfica e de impresso</p>
        </div>
        <div className="carts-work">
            <img src={fast} alt=""/>
            <h1>Fast Deliveries</h1>
            <p>Lorem Ipsum é simplesmente uma
               simulação de texto da indústria tipográfica e de impressos</p>
        </div>
    </div>
    </div>
  );
}

export default Work;