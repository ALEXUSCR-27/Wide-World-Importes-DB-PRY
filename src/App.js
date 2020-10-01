import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Modulos from './components/Modulos.js';
import ModuloCliente from './components/ModuloCliente.js';
import ModuloProveedor from './components/ModuloProveedor.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Modulos}/>
        <Route exact path="/modulos" component={Modulos}/>
        <Route exact path="/moduloCliente" component={ModuloCliente}/>
        <Route exact path="/moduloProveedor" component={ModuloProveedor}/>
      </BrowserRouter>
    );
  }
}

export default App;
