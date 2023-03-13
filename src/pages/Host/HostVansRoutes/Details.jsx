import React from "react";
import { useOutletContext } from "react-router-dom";

function Details() {
	const current = useOutletContext();

	return (
		<div>
			<p>
				<strong>Name:</strong>
        {current.description}
			</p>
		</div>
	);
}

export default Details;
