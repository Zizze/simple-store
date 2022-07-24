import { Route, Routes } from "react-router-dom";
import ErrorPage from "./componets/ErrorPage";
import Header from "./componets/Header/Header";
import OrderItems from "./componets/OrderItems/OrderItems";
import OrderSuccess from "./componets/OrderItems/OrderSuccess";
import Products from "./componets/Products/Products";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/order" element={<OrderItems />} />
				<Route path="/order/success" element={<OrderSuccess />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
