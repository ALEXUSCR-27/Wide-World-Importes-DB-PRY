import React, {Component} from 'react';

class Navbar extends Component {
	render() {
		return (
				<nav className="navbar navbar-expand-xl navbar-dark bg-dark">
						<a className="navbar-brand" href="http://localhost:3000/modulos">Wide World Importerts</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarColor02">
								<ul className="navbar-nav mr-auto">
								  <li className="nav-item active">
								    <a className="nav-link" href="http://localhost:3000/modulos">Home <span className="sr-only">(current)</span></a>
								  </li>
								</ul>
						</div>
				</nav>
		)
	}
}
export default Navbar;