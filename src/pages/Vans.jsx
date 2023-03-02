import React, { useEffect, useState } from "react";
import "../server";

function Vans() {
	const [vans, setVans] = useState([]);

	// load data on page first render
	useEffect(() => {
		fetch("/api/vans")
			.then((res) => res.json())
			.then((data) => setVans(data.vans));
	}, []);

	console.log(vans);

	const vansEl = vans.map((van) => {
		return (
			<div key={van.id} className="van-tile">
				<img src={van.imageUrl} alt={van.name} />
				<div className="van-info">
					<h3 className="van-name">{van.name}</h3>
					<div className="van-price">
						<span className="price">
							${van.price}
						</span>{" "}
						<br />
						<span className="per-unit">
							/Day
						</span>
					</div>
				</div>

				<p className="van-type">{van.type}</p>
			</div>
		);
	});

	return (
		<section className="vans-page">
			<h2>Explore our van options</h2>
			<div className="vans-container">{vansEl}</div>
		</section>
	);
}

export default Vans;
