import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
} from "react-router-dom";
import { About, Home, Vans } from "./pages";
import { Footer, Header } from "./components";
import "./server";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		fetch("./api/vans")
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/vans" element={<Vans />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
