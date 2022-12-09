import React from 'react';
import MainPage from './pages/MainPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<main className="App">
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
