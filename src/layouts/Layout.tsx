import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';

export default function Layout(): JSX.Element {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
}
