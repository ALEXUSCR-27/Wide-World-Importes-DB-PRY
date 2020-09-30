import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Clientes from '../img/Clientes_2.png';

/* revisar width margin-right height border-radius float */
class ModuloProveedor extends Component{
	render () {
		return (
			<div>
			<nav className="navbar navbar-expand-xl navbar-dark bg-dark">
			  <a className="navbar-brand" href="#">Wide World Importerts</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarColor02">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			      </li>
			    </ul>
			  </div>
			</nav>
				<div className="jumbotron">
					<h1 className="display-4"><img className="img-fluid" src= {Clientes}/>&nbsp;Módulo de Consulta de Proveedores</h1>
				</div>
				<Container className="container width=100 justify-content-center">
					<div className="row">
						<div className="form-group col-md-4 offset-1">
							<label htmlFor="NombreCliente">Nombre del Cliente</label>
							<input type="text" className="form-control form-control-lg" id="NombreCliente"/>
						</div>
						<div className="form-group col-md-4 offset-2">
							<label htmlFor="categoria">Categoría</label>
				      <select className="form-control" id="categoria">
				      	<option></option>
				        <option>Agent</option>
				        <option>Computer Store</option>
				        <option>Corporate</option>
				        <option>General Retailer</option>
				        <option>Gift Store</option>
				        <option>Novelty Shop</option>
				        <option>Supermarket</option>
				        <option>Wholesaler</option>
				      </select>
				    </div>
				    <div className="form-group col-md-4 offset-1">
							<label htmlFor="metodoEntrega">Metodo de Entrega</label>
				      <select className="form-control" id="metodoEntrega">
				      	<option></option>
				        <option>Air Freight</option>
				        <option>Chilled Van</option>
				        <option>Courier</option>
				        <option>Customer Collect</option>
				        <option>Customer Courier to Collect</option>
				        <option>Delivery Van</option>
				        <option>Post</option>
				        <option>Refrigerated Air Freight</option>
				        <option>Refrigerated Road Freight</option>
				        <option>Road Freight</option>
				      </select>
				    </div>
				    <div className="div col-md-2 offset-xl-3">
					    <br/>
					    <a href="#" className="btn btn-secondary btn-block"> Realizar Consulta </a>
				    </div>
				    <table className="table table-hover">
				    	<tbody>
				    		<tr className="table-dark">
						      <th scope="row"></th>
						      <td>Nombre del Cliente</td>
						      <td>Categoría</td>
						      <td>Metodo de Entrega</td>
						    </tr>
						  </tbody>
						</table>
					</div>
				</Container>
			</div>
		);
	}
}
export default ModuloProveedor;