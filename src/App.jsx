import React from 'react';
import MainPage from './pages/MainPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header.jsx';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
