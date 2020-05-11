import React from 'react';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import  './styles.css';

function Perfil() {
  return (
    <div className="perfil">
      <span>Desenvolvedor</span>
      <h1>Front-End</h1>
      <p>Quem nunca cometeu um erro nunca tentou nada de novo.</p>

      <div className="box-perfil">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFWWj6ZfUqdKg/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=1t0l41Cf71E9LWhxQVwmHcLmvRj3Ls7tqZvVfVc7IsY" alt=""/>
        <p>“Duas estradas divergiam em uma bifurcação, e eu peguei a menos percorrida. E isso fez toda a diferença”</p>
        <Box className="stars" component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={5} readOnly />
        </Box>
      </div>
    </div>
    
  );
}

export default Perfil;