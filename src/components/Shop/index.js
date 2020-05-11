import React from 'react';
import prato1 from '../../utilss/prato1.jpg'
import './styles.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function Shop() {
  //caso queira usar o ratting de modo dinamico
  const [value, setValue] = React.useState();

  return (
    <div className="shop">
      <span>Menu</span>
      <h1>How it Works</h1>
      <p>The href attribute requires a valid value to be accessible.</p>

      <div className="block-cart"> 
          <div className="shop-cart">
            <img src={prato1} alt=""/>
            <div className="block-h1">
              <h1>Prato 1</h1> <h1>12$</h1>
            </div>
            <div className="block-p">
                <p >Servido com frios + drinks</p>
                <p className="especial">ovos, macarrao, molho, pimenta, filadelfia, how </p>
            </div>
            <div className="botao-stars">
              <Box className="stars" component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={4} readOnly />
              </Box>
                <button>+</button>
            </div>
          </div>

          <div className="shop-cart">
            <img src="https://images.unsplash.com/photo-1562403492-454d4b075cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
            <div className="block-h1">
              <h1>Prato 1</h1> <h1>12$</h1>
            </div>
            <div className="block-p">
                <p >Servido com frios + drinks</p>
                <p className="especial">ovos, macarrao, molho, pimenta, filadelfia, how </p>
            </div>
            <div className="botao-stars">
              <Box className="stars" component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={3} readOnly />
              </Box>
                <button>+</button>
            </div>
          </div>

          <div className="shop-cart">
            <img src="https://images.unsplash.com/photo-1557798796-57adf4d0a3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
            <div className="block-h1">
              <h1>Prato 1</h1> <h1>12$</h1>
            </div>
            <div className="block-p">
                <p >Servido com frios + drinks</p>
                <p className="especial">ovos, macarrao, molho, pimenta, filadelfia, how </p>
            </div>
            <div className="botao-stars">
              <Box className="stars" component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={4} readOnly />
              </Box>
                <button>+</button>
            </div>
          </div>

          <div className="shop-cart">
            <img src="https://images.unsplash.com/photo-1583835746434-cf1534674b41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
            <div className="block-h1">
              <h1>Prato 1</h1> <h1>12$</h1>
            </div>
            <div className="block-p">
                <p >Servido com frios + drinks</p>
                <p className="especial">ovos, macarrao, molho, pimenta, filadelfia, how </p>
            </div>
            <div className="botao-stars">
              <Box className="stars" component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={4} readOnly />
              </Box>
                <button>+</button>
            </div>
          </div>

          <div className="shop-cart">
            <img src="https://images.unsplash.com/photo-1573506254685-02bcbfc9ab6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
            <div className="block-h1">
              <h1>Prato 1</h1> <h1>12$</h1>
            </div>
            <div className="block-p">
                <p >Servido com frios + drinks</p>
                <p className="especial">ovos, macarrao, molho, pimenta, filadelfia, how </p>
            </div>
            <div className="botao-stars">
              <Box className="stars" component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={5} readOnly />
              </Box>
                <button>+</button>
            </div>
          </div>

          <div className="shop-cart">
            <img src="https://images.unsplash.com/photo-1561363268-f17491a094bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
            <div className="block-h1">
              <h1>Prato 1</h1> <h1>12$</h1>
            </div>
            <div className="block-p">
                <p >Servido com frios + drinks</p>
                <p className="especial">ovos, macarrao, molho, pimenta, filadelfia, how </p>
            </div>
            <div className="botao-stars">
              <Box className="stars" component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={4} readOnly />
              </Box>
                <button>+</button>
            </div>
          </div>        
      </div>


      <div className="botao-loads">
          <button>Carregar </button>
      </div>
    </div>
  );
}

export default Shop;