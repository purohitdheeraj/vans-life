import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { Badge } from "../UI";

function Vans() {
	const [vans, setVans] = useState([]);
	const [searchParams, setSearchParams] =
		useSearchParams();
	const [searchInput, setSearchInput] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	// load data on page first render
	useEffect(() => {
		fetch("/api/vans")
			.then((res) => res.json())
			.then((data) => setVans(data.vans));
	}, []);

	const typeFilter = searchParams.get("type");

	useEffect(() => {
		let filteredVans = vans.filter((van) => {
			return van.type.toLowerCase() === typeFilter;
		});

		setFilteredData(filteredVans);
	}, [typeFilter]);

	const handleSearch = (e) => {
		let searchQuery = e.target.value;
		setSearchInput(searchQuery);
		let filteredVans = vans.filter((van) => {
			return Object.values(van)
				.join("")
				.toLowerCase()
				.includes(searchQuery);
		});
		setFilteredData(filteredVans);
		setSearchParams({});
	};

	let displayedData =
		filteredData.length > 0 ? filteredData : vans;

	const vansEl = displayedData.map((van) => {
		return (
			<div key={van.id} className="van-tile">
				<Link
					to={`/vans/${van.id}`}
					state={{
						search: searchParams.toString(),
						type: typeFilter,
					}}
				>
					<img
						src={van.imageUrl}
						alt={van.name}
					/>
					<div className="van-info">
						<h3 className="van-name">
							{van.name}
						</h3>
						<div className="van-price">
							<span className="price">
								${van.price}
							</span>{" "}
							<br />
							<span className="per-unit">
								/Day
							</span>
						</div>
					</div>

					<Badge
						isSelected={true}
						type={van.type}
						className="van-type"
					>
						{van.type}
					</Badge>
				</Link>
			</div>
		);
	});

	const handleFilterChange = (key, value) => {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}
			return prevParams;
		});
	};

	if (vans.length <= 0) {
		return <h2>Loading...</h2>;
	}

	return (
		<section className="vans-page">
			<h2>Explore our van options</h2>

			<input
				type="text"
				value={searchInput}
				placeholder="fuzzy search"
				onChange={handleSearch}
			/>

			<div className="vans-filters">
				<Badge
					className={`btn van-type simple ${
						typeFilter === "simple"
							? "selected"
							: ""
					}`}
					onClick={() =>
						handleFilterChange("type", "simple")
					}
					onHover={true}
					type="simple"
				>
					Simple
				</Badge>

				<Badge
					className={`btn van-type luxury ${
						typeFilter === "luxury"
							? "selected"
							: ""
					}`}
					onClick={() =>
						handleFilterChange("type", "luxury")
					}
					onHover={true}
					type="luxury"
				>
					Luxury
				</Badge>

				<Badge
					className={`btn van-type rugged ${
						typeFilter === "rugged"
							? "selected"
							: ""
					}`}
					onClick={() =>
						handleFilterChange("type", "rugged")
					}
					onHover={true}
					type="rugged"
				>
					Rugged
				</Badge>

				{typeFilter && (
					<Badge
						className="btn"
						onClick={() =>
							handleFilterChange("type", null)
						}
						onHover={true}
						type="clear"
					>
						clear
					</Badge>
				)}
			</div>
			<div className="vans-container">{vansEl}</div>
		</section>
	);
}

export default Vans;
