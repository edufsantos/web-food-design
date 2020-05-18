import React, {useState} from 'react';
import arrow from '../../utilss/arrow-left-withe.svg'
import cartOrange from '../../utilss/shopCart.svg'
import { Link } from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md'
import './styles.css';

function Carrinho() {
  const[active, setActive] = useState(false);
  const [clikOrnot, setClikOrnot] = useState('')
  function addActive(e){
    setActive(!active); 
    console.log(e.target)
  }
  function addClassInFill(e){
    const divi = e.target;
  }

  return (
    <>
      <nav>  
        <Link to="/">
          <a href=""><img src={arrow} alt=""/></a>
        </Link>
        <p>CATÁLOGO</p>

        <div className="botoes">
          {/* <a href=""><img src={cartOrange} alt=""/></a> */}
          <div className={active ? "open menu-btn " : "menu-btn"}>
           <div onClick={addActive} class={active ? "open menu-btn__burger" : "menu-btn__burger"}></div>
          </div>
        </div>
      </nav>
      <div className={ active ? "open-menu-sidebar sidebar-nav" : "sidebar-nav"} >
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      
      <div className="filtro-food">
        <div className="lista-filtro">

          <button onClick={addClassInFill} >
            <span>Pizzas Tradicionais</span>
          </button>

          <button >
            <span>Sobás</span>
          </button>

          <button>
            <span>Pasteis</span>
          </button>

          <button>
            <span>Salada</span>
          </button>
          <button>
            <span>Bebidas</span>
          </button>
        </div>
      </div>

     <div className="carts-filtrado">
       <div className="itens-separacao">
          {/* AQUI COMEÇA A LISTA DA API */}
       <div className="cardapio-h1-img">
          <h1>Pizzas Tradicionais</h1>
        </div>
       <div className="lista-produto">
        <Link to="/produto">
            <div className="cart-produtos-carrinho">
              <div className="alinhar-textos">
                <div style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC-H9tIODfGMn4TqsCUpMnlJLowVW86pWGrF2FKZsJ-8Kegje-&usqp=CAU')`}} className="alinhar-img">
                </div>
                <h1>Pizza de calabresa com Catupiry</h1>
                <span>pizza feita com amor e dedicação</span>
                <strong>R$: 45,00</strong>
              </div>
              
            </div>
          </Link>
        <Link to="/produto">
          <div className="cart-produtos-carrinho">

          {/* adicionar foto da lista de produtos da empresa */}
            <div style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC-H9tIODfGMn4TqsCUpMnlJLowVW86pWGrF2FKZsJ-8Kegje-&usqp=CAU')`}} className="alinhar-img">
            
            </div>
            <div className="alinhar-textos">
              <h1>Pizza de calabresa com Catupiry</h1>
              <span>pizza feita com amor e dedicação</span>
              <strong>R$: 45,00</strong>
            </div>
          
          </div>
        </Link>

      </div>
     
      </div>    
      <div className="itens-separacao">
      <div className="cardapio-h1-img">
          <h1>Sobás</h1>
        </div>
       <div className="lista-produto">
        <Link to="/produto">
          <div className="cart-produtos-carrinho">
            <div  style={{backgroundImage: 
              `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC-H9tIODfGMn4TqsCUpMnlJLowVW86pWGrF2FKZsJ-8Kegje-&usqp=CAU')`}} className="alinhar-img">
            </div>
            <div className="alinhar-textos">
              <h1>Pizza de calabresa com Catupiry</h1>
              <span>pizza feita com amor e dedicação</span>
              <strong>R$: 45,00</strong>
            </div>
            
          </div>
        </Link>
        

        <Link to="/produto">
          <div className="cart-produtos-carrinho">
            <div  style={{backgroundImage: 
              `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC-H9tIODfGMn4TqsCUpMnlJLowVW86pWGrF2FKZsJ-8Kegje-&usqp=CAU')`}} className="alinhar-img">
            </div>
            <div className="alinhar-textos">
              <h1>Pizza de calabresa com Catupiry</h1>
              <span>pizza feita com amor e dedicação</span>
              <strong>R$: 45,00</strong>
            </div>
            
          </div>
        </Link>

        <Link to="/produto">
          <div className="cart-produtos-carrinho">
            <div  style={{backgroundImage: 
              `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC-H9tIODfGMn4TqsCUpMnlJLowVW86pWGrF2FKZsJ-8Kegje-&usqp=CAU')`}} className="alinhar-img">
            </div>
            <div className="alinhar-textos">
              <h1>Pizza de calabresa com Catupiry</h1>
              <span>pizza feita com amor e dedicação</span>
              <strong>R$: 45,00</strong>
            </div>
            
          </div>
        </Link>

        <Link to="/produto">
          <div className="cart-produtos-carrinho">
            <div  style={{backgroundImage: 
              `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC-H9tIODfGMn4TqsCUpMnlJLowVW86pWGrF2FKZsJ-8Kegje-&usqp=CAU')`}} className="alinhar-img">
            </div>
            <div className="alinhar-textos">
              <h1>Pizza de calabresa com Catupiry</h1>
              <span>pizza feita com amor e dedicação</span>
              <strong>R$: 45,00</strong>
            </div>
            
          </div>
        </Link>
        

        
      </div>
      </div>

    </div>
    <div className="btn-carrinho-display">
      <div className="botao-carrinho">
          <MdShoppingCart size={20} color="#ffff"/>
          <h1>VER CARRINHO</h1>

          <span>R$:50,00</span> 
      </div>
    </div>
   

    </>
  );
}

export default Carrinho;