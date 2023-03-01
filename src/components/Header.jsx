import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className="nav">
			<Link to="/" className="logo">
				#VansLife
			</Link>
			<Link to="/about">About</Link>
			<Link to="/vans">Vans</Link>
		</nav>
	);
}

export default Header;
