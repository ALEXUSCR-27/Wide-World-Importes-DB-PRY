import React, {Component} from 'react';
import {Container,InputGroup,FormControl,Button,Table,Card,ListGroup} from 'react-bootstrap'
import {Route} from 'react-router-dom';
import Clientes from '../img/Clientes.png';
import Proveedores from '../img/Proveedores.png';
import Inventarios from '../img/Inventario.png';
import Ventas from '../img/Ventas.png';
import logo from '../img/logo.png';


class Modulos extends Component {
	render() {
		return (
			<div>
				<h1 className="jumbotron text-white"><img className="img-fluid" src= {logo}/>&nbsp;Sistema de Consulta Wide World Importers Database</h1>
				<container className="container-fliud width=100 justify-content-center">
			        <div className="row">
			            <div className="Card col-md-4 offset-3">
			              <Card style={{ width: '280px'}}>
			                <Card.Body>
			                  <Card.Title>Modulo de Clientes</Card.Title>
			                  <img className="card-img-top" src= {Clientes}/>
			                  <br/>
			                  <br/>
			                  <a href="http://localhost:3000/moduloCliente" className="btn btn-primary btn-block">Realizar Consulta</a>
			                </Card.Body>
			              </Card>
			            </div>
			            <div className="Card col-md-4">
			              <Card style={{ width: '280px'}}>
			                <Card.Body>
			                  <Card.Title>Modulo de Proveedores</Card.Title>
			                  <img className="card-img-top" src= {Proveedores}/>
			                  <br/>
			                  <br/>
			                  <a href="http://localhost:3000/moduloProveedor" className="btn btn-primary btn-block">Realizar Consulta</a>
			                </Card.Body>
			              </Card>
			              <br/>
			            </div>
			            <div className="Card col-md-4 offset-3">
			              <Card style={{ width: '280px' }}>
			                <Card.Body>
			                  <Card.Title>Modulo de Inventarios</Card.Title>
			                  <img className="card-img-top" src= {Inventarios}/>
			                  <br/>
			                  <br/>
			                  <a href="#" className="btn btn-primary btn-block">Realizar Consulta</a>
			                </Card.Body>
			              </Card>
			            </div>
			            <div className="Card col-md-4">
			              <Card style={{ width: '280px' }}>
			                <Card.Body>
			                  <Card.Title>Modulo de Ventas</Card.Title>
			                  <img className="card-img-top" src= {Ventas}/>
			                  <br/>
			                  <br/>
			                  <a href="#" className="btn btn-primary btn-block">Realizar Consulta</a>
			                </Card.Body>
			              </Card>
			            </div>
			        </div>
			    </container>
			    <div class="jumbotron-fluid col-md-12 offset-xl-3">
			      <br/>
						<h1 class="display-3">Datos estadísticos</h1>
						<p>Sección para análisis del gran volumen de información contenida en la base de datos.</p>
						<p class="lead">
							<a class="btn btn-primary btn-lg" href="#" role="button">Realizar Consulta</a>
						</p>
					</div>
			</div>
		)
	}
}

export default Modulos;