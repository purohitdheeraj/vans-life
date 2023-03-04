import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import React from "react";

function Layout() {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
