import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { About, Home, Vans } from "./pages";
import { Footer, Header } from "./components";

function App() {
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
