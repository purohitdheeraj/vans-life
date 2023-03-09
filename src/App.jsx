import "./App.css";
import {
	Route,
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
} from "react-router-dom";
import {
	Home,
	About,
	Vans,
	VanDetail,
	NotFound,
} from "./pages";
import { Error, Layout } from "./components";
import "./server";

import { loader } from "./pages/Vans";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route
				path="/vans"
				element={<Vans />}
				loader={loader}
				errorElement={<Error />}
			/>
			<Route
				path="/vans/:id"
				element={<VanDetail />}
			/>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
