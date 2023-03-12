export async function getVans() {
	const res = await fetch("/api/vans");

	if (!res.ok) {
		// console.log("error occured");
		throw {
			message: "Failed to fetch vans",
			statusText: res.statusText,
			status: res.status,
		};
	}
	const parseData = await res.json();
	return parseData.vans;
}

export async function getHostVans() {
	const res = await fetch("/api/host/vans");
	if (!res.ok) {
		throw {
			message: "Failed to fetch vans",
			statusText: res.statusText,
			status: res.status,
		};
	}
	const parseData = await res.json();
	return parseData.vans;
}
