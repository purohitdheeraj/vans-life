import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../../UI";

function HostVanDetail() {
	const { id } = useParams();
	const [currentVan, setCurrentVan] = React.useState("");

	React.useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then((res) => res.json())
			.then((data) => setCurrentVan(data.vans));
	}, []);

	const hostVanEl = (
		<div className="host-van-detail-page">
			<Link to=".." relative="path">
				Back to vans
			</Link>
			<div className="host-van-detail">
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
		</div>
	);

	return <>{hostVanEl};</>;
}

export default HostVanDetail;
