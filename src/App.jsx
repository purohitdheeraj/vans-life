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
	Dashboard,
	Income,
	HostVans,
	Reviews,
	HostVanDetail,
} from "./pages";
import { Error, HostLayout, Layout } from "./components";
import "./server";

import { loader } from "./pages/Vans";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route
				path="vans"
				element={<Vans />}
				loader={loader}
				errorElement={<Error />}
			/>
			<Route
				path="vans/:id"
				element={<VanDetail />}
			/>

			<Route path="host" element={<HostLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="income" element={<Income />} />
				<Route path="vans" element={<HostVans />} />
				<Route
					path="vans/:id"
					element={<HostVanDetail />}
				/>
				<Route
					path="reviews"
					element={<Reviews />}
				/>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
