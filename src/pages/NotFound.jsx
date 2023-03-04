import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="notfound-page">
			<h2>
				Sorry, the page you were looking for was not
				found.
			</h2>

			<Link className="btn cta-notfound" to="/">
				Return to home
			</Link>
		</div>
	);
}

export default NotFound;
