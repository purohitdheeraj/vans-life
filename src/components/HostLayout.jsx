import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
	return (
		<>
			<nav className="nav">
				<NavLink
					className={({ isActive }) =>
						isActive ? "activeLink" : ""
					}
					to="."
					end
				>
					Dashboard
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "activeLink" : ""
					}
					to="income"
				>
					Income
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "activeLink" : ""
					}
					to="vans"
				>
					Vans
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "activeLink" : ""
					}
					to="reviews"
				>
					Reviews
				</NavLink>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default HostLayout;
