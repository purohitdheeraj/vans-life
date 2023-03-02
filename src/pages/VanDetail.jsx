import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function VanDetail() {
	const [van, setVan] = useState({});
	const params = useParams();

	useEffect(() => {
		fetch(`/api/vans/${params.id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans));
	}, [params.id]);

	const vanDetailEl = (
		<div key={van.id} className="van-details">
			<Link to="/vans">back to all vans</Link>

			<img src={van.imageUrl} alt={van.name} />
			<p className="van-type">{van.type}</p>

			<h3 className="van-name">{van.name}</h3>
			<div className="van-price">
				<span className="price">${van.price}</span>{" "}
				<span className="per-unit">/Day</span>
			</div>
			<p className="van-description">
				{van.description}
			</p>
			<button className="cta-link btn">
				Rent this van
			</button>
		</div>
	);

	return (
		<section className="van-details-page">
			{vanDetailEl}
		</section>
	);
}

export default VanDetail;
