import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Badge } from "../../UI";

function HostVanDetail() {
	const { id } = useParams();
	const [currentVan, setCurrentVan] = useState("");

	useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then((res) => res.json())
			.then((data) => setCurrentVan(data.vans));
	}, []);

	const hostVanNavigation = (
		<nav className="nav">
			<Link to={`.`}>Details</Link>
			<Link to={`pricing`}>Pricing</Link>
			<Link to={`photos`}>Photos</Link>
		</nav>
	);

	const hostVanEl = (
		<div className="host-van-detail-page">
			<Link to=".." relative="path">
				Back to vans
			</Link>

			<div className="host-van-detail">
				<div className="host-van-header">
					<img
						className="host-van-detail-image"
						src={currentVan.imageUrl}
						alt={currentVan.name}
					/>
					<div className="host-van-detail-info">
						<Badge
							type={currentVan.type}
							isSelected
							className=""
						>
							{currentVan.type}
						</Badge>
						<h2>{currentVan.name}</h2>
						<p>
							<b>${currentVan.price}</b>/day
						</p>
					</div>
				</div>
				<header className="host-header">
					{hostVanNavigation}
				</header>
				<Outlet context={currentVan} />
			</div>
		</div>
	);

	return <>{hostVanEl}</>;
}

export default HostVanDetail;
