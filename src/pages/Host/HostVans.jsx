import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHostVans, getVans } from "../../api";

function HostVans() {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		(async () => {
			const listedVans = await getHostVans();
			setVans(listedVans);
		})();
	}, []);

	const listedVansEl = vans.map((van) => {
		return (
			<Link to={`${van.id}`} key={van.id}>
				<div className="host-van tile">
					<img
						src={van.imageUrl}
						alt={van.name}
					/>
					<div className="host-van-info">
						<h3>{van.name}</h3>
						<p>${van.price}/day</p>
					</div>
				</div>
			</Link>
		);
	});

	return (
		<section className="host-vans">
			<h2>Your Listed Vans</h2>
			<article className="host-vans-container">
				{listedVansEl}
			</article>
		</section>
	);
}

export default HostVans;
