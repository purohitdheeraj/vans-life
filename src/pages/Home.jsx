import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI";

function Home() {
	return (
		<main className="home">
			<h2>
				You got the travel plans, we got the travel
				vans.
			</h2>
			<p>
				Add adventure to your life by joining the
				#vanlife movement. Rent the perfect van to
				make your perfect road trip.
			</p>

			<Link className="btn cta-home" to="/vans">
				Find your van
			</Link>
		</main>
	);
}

export default Home;
