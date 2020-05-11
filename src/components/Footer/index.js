import React from 'react';
import {FaFacebookF, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import  './styles.css';

function Footer() {
  return (
    <div className="footer">
      <h1>Deseja entrar em contato conosco?</h1>
      <div className="input">
        <input type="text" placeholder="seuemail@gmail.com"/>
        <button>Send</button>
      </div>
      <div className="footer-options">
        <div className="header-footer">
        <h1>FOOD</h1> 
        <ul>
          <li>Home</li>
          <li>Packages</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        </div>
        <section className="grid-contact" >
          <div className="icons">
            <FaFacebookF className="i-Fa"/>
            <FaLinkedinIn className="i-Fa"/>
            <FaYoutube className="i-Fa"/>
          </div>
          <div className="contact">
            <p>ajuda <br/> help <br/> share <br/></p>
            <p>999-999-99 <br/> teste@gmail.com <br/> gestorfood@@gmail.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;