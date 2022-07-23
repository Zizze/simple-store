import { Route, Routes } from "react-router-dom";
import Header from "./componets/Header/Header";
import OrderItems from "./componets/OrderItems/OrderItems";
import Products from "./componets/Products/Products";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Products />}></Route>
				<Route path="/order" element={<OrderItems />}></Route>
			</Routes>
		</>
	);
}

export default App;
