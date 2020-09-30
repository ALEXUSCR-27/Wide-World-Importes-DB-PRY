import React,{Component} from 'react';
import './App.css';
import Modulos from './components/Modulos.js';
import ModuloCliente from './components/ModuloCliente.js';
import logo from './img/logo.png';

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1 className="jumbotron text-white"><img className="img-fluid" src= {logo}/>&nbsp;Sistema de Consulta Wide World Importers Database</h1>
      <Modulos/>
    </div>
  );
}
}

export default App;
