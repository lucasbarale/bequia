import React from "react";
import Logo from "../../assets/images/logo-bequia.png";

function Sidebar() {

	return (

		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={Logo} height="60" alt="Dashboard - Bequia" />
				</div>
			</a>

			<hr className="sidebar-divider my-0" />

			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - Bequia</span></a>
			</li>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">Acciones</div>

			<li className="nav-item">
				<a className="nav-link collapsed" href="http://localhost:3030/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Home</span>
				</a>
			</li>

			<li className="nav-item">
				<a className="nav-link" href="http://localhost:3030/productos">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Productos</span>
				</a>
			</li>


			<li className="nav-item">
				<a className="nav-link" href="http://localhost:3030/usuarios/login">
					<i className="fas fa-fw fa-table"></i>
					<span>Login</span>
				</a>
			</li>


			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	)

}

export default Sidebar;