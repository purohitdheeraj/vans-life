import React, { useEffect, useState } from "react";
import {
	Link,
	useLocation,
	useParams,
} from "react-router-dom";
import { Badge, Button } from "../UI";

function VanDetail() {
	const [van, setVan] = useState(null);
	const params = useParams();
	const location = useLocation();

	let search = location.state?.search || "";
	let type = location.state?.type || "all";

	useEffect(() => {
		fetch(`/api/vans/${params.id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans));
	}, [params.id]);

	const vanDetailEl = van ? (
		<div key={van.id} className="van-details">
			<Link to={`..?${search}`} relative="path">
				back to {type} vans
			</Link>

			<img src={van.imageUrl} alt={van.name} />

			<Badge isSelected={true} type={van.type}>
				{van.type}
			</Badge>

			<h3 className="van-name">{van.name}</h3>
			<div className="van-price">
				<span className="price">${van.price}</span>{" "}
				<span className="per-unit">/Day</span>
			</div>
			<p className="van-description">
				{van.description}
			</p>

			<Button>Rent this van</Button>
		</div>
	) : (
		<h2>Loading...</h2>
	);

	return (
		<section className="van-details-page">
			{vanDetailEl}
		</section>
	);
}

export default VanDetail;
