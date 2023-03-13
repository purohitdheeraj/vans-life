import React from "react";
import { useOutletContext } from "react-router-dom";

function Pricing() {
	const current = useOutletContext();

	return (
		<div>
			<b>Pricing:</b>${current.price}/ Day
		</div>
	);
}

export default Pricing;
