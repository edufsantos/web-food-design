import React from 'react';
import './styles.css';

import hours from '../../utilss/hours.svg'
import phone from '../../utilss/phone.svg'
import point from '../../utilss/point.svg'

function Times() {
  return (
    <div className="times">

        <div className="carts">
            <img src={hours} alt=""/>
            <h1>Today 10:00 am - 7:00pm</h1>
            <p>Horas de Trabalho</p>
        </div>
        <div className="carts">
            <img src={point} alt=""/>
            <h1>Belo Horizonte, 300</h1>
            <p>Ver Rota</p>
        </div>
        <div className="carts">
            <img src={phone} alt=""/>
            <h1>+55 (067) 99999-9999</h1>
            <p>Realizar Chamada</p>
        </div>
  </div>
  );
}

export default Times;