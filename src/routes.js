import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Carrinho from './Pages/Carrinho'
import Produto from './Pages/Produto'
export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cart" component={Carrinho}/>
      <Route path="/produto" component={Produto}/>
    </Switch>
  );
}

