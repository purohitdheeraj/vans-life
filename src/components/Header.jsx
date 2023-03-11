import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/site-logo.png";
function Header() {
	return (
		<header className="header">
			<NavLink to="/">
				<img
					className="site-logo"
					src={logo}
					alt="site-logo"
				/>
			</NavLink>

			<nav className="nav">
				<NavLink
					className={({ isActive }) => {
						return isActive ? "activeLink" : "";
					}}
					to="/host"
				>
					Host
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? "activeLink" : "";
					}}
					to="/about"
				>
					About
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? "activeLink" : "";
					}}
					to="/vans"
				>
					Vans
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
