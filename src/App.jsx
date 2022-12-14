import React from 'react';
import MainPage from './pages/MainPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/index.jsx';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className="App subpixel-antialiased">
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
