import React from "react";
import { useOutletContext } from "react-router-dom";

function Photos() {
	const current = useOutletContext();

	return (
		<div>
			<img src={current.imageUrl} width={100} />
		</div>
	);
}

export default Photos;
