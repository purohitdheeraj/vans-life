import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import {
	Home,
	About,
	Vans,
	VanDetail,
	NotFound,
} from "./pages";
import { Layout } from "./components";
import "./server";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/vans"
						element={<Vans />}
					/>
					<Route
						path="/vans/:id"
						element={<VanDetail />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
