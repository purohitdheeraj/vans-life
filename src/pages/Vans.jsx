import React, { useEffect, useState } from "react";
import {
	Link,
	useLoaderData,
	useSearchParams,
} from "react-router-dom";
import { getVans } from "../api";
import { Badge } from "../UI";

export async function loader() {
	return await getVans();
}

function Vans() {
	// const [vans, setVans] = useState([]);
	const [searchParams, setSearchParams] =
		useSearchParams();
	const [searchInput, setSearchInput] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	const vans = useLoaderData();

	const typeFilter = searchParams.get("type");

	useEffect(() => {
		let newFilteredVans = vans.filter((van) => {
			return van.type.toLowerCase() === typeFilter;
		});

		setFilteredData(newFilteredVans);
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
		typeFilter || searchInput ? filteredData : vans;

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

	// if (error) {
	// 	return <h2>{error.message}</h2>;
	// }

	// if (loading) {
	// 	return <h2>Loading...</h2>;
	// }

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
					toHover={true}
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
					toHover={true}
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
					toHover={true}
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
						toHover={true}
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
