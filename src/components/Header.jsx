import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/site-logo.png";
function Header() {
	return (
		<header className="header">
			<Link to="/">
				<img
					className="site-logo"
					src={logo}
					alt="site-logo"
				/>
			</Link>

			<nav className="nav">
				<Link to="/about">About</Link>
				<Link to="/vans">Vans</Link>
			</nav>
		</header>
	);
}

export default Header;
