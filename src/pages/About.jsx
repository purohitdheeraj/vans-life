import React from "react";
import aboutHeroImg from "../assets/images/about-hero.png";
import { Link } from "react-router-dom";

function About() {
	return (
		<main className="about-page">
			<img
				className="about-hero-img"
				src={aboutHeroImg}
				alt="about-page-hero"
			/>

			<section className="about-page-info">
				<h2>
					Don’t squeeze in a sedan when you could
					relax in a van.
				</h2>
				<p>
					Our mission is to enliven your road trip
					with the perfect travel van rental. Our
					vans are recertified before each trip to
					ensure your travel plans can go off
					without a hitch. (Hitch costs extra 😉)
				</p>
				<p>
					Our team is full of vanlife enthusiasts
					who know firsthand the magic of touring
					the world on 4 wheels.
				</p>
			</section>

			<section className="about-page-cta">
				<h3>
					Your destination is waiting. <br />
					Your van is ready.
				</h3>
				<Link to="/vans" className="btn cta-about">
					Explore our vans
				</Link>
			</section>
		</main>
	);
}

export default About;
