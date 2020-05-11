import React from 'react';
import './styles.css';
import play from '../../utilss/play.svg'

function HeaderTwo() {
  return (
    <div className="header">

      <div className="conteudo">  
          <span>About</span>
          <h1>Temos comidas para sua dieta do dia a dia</h1>
          <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível
            de uma página quando estiver examinando sua diagramação.</p>
          
          <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível
            de uma página quando estiver examinando sua diagramação.</p>

          <div className="btns-play">
            
          <button className="btn-learn">Learn More</button> 
          <a href="#"><img src={play} alt=""/>Watch Video</a>
          </div>
        </div>  
    </div>
  );
}

export default HeaderTwo;