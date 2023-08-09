import { Routes, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import Layout from './layouts/Layout';
import ProductsList from './features/products/ProductsList';
import Home from './features/home/Home';
import ProductCreate from './features/products/ProductCreate';

export default function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="counter" element={<Counter />} />
				<Route path="products" element={<ProductsList />} />
				<Route path="product-create" element={<ProductCreate />} />
			</Route>
		</Routes>
	);
}
