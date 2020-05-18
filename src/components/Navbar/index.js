import React, {useState} from 'react';
import '../../Pages/Home/App.css';
import {MdPerson ,MdRestaurantMenu} from 'react-icons/md'
import arrow from '../../utilss/arrow2.svg'
import cartOrange from '../../utilss/shopCart.svg'
import cart from '../../utilss/cart.svg';
import './styles.css';
import { Link} from 'react-router-dom'

function Navbar() {
  const[activeBurg, setActiveBurg] = useState(false) 
  const[active, setActive] = useState(false);
  function addActive(){
    setActive(!active); 
  }
  function addActiveBurg(){
    setActiveBurg(!activeBurg)
  }
  return (
    <>
    <nav className="nav-home">
      <div className={active ? "open menu-btn-home " : "menu-btn-home"}>
           <div onClick={addActive} class={active ? "open menu-btn__burger-home" : "menu-btn__burger-home"}></div>
      </div>
      <div className="logo"></div>
      <div className="person">
        <Link to="/cart">
          <MdRestaurantMenu size={50} color="#2F2E41"/>
        </Link>
      </div>
    </nav>
    <div className={ active ? "open-menu-sidebar-home sidebar-nav-home" : "sidebar-nav-home"} >
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
    );
}

export default Navbar;
