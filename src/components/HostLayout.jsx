import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
	return (
		<>
			<header className="host-header">
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
			</header>

			<Outlet />
		</>
	);
}

export default HostLayout;
