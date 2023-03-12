import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function HostVanDetail() {
	const { id } = useParams();
	// const [currentVan, setCurrentVan] =
	// 	React.useState(null);

	React.useEffect(() => {
		fetch(`/api/host/vans/${id}`).then((res) =>
			console.log(res)
		);
	}, []);

	return <div>Host Van Detail</div>;
}

export default HostVanDetail;
