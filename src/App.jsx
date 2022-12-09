import React from 'react';
import MainPage from './pages/MainPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<div className="App flex flex-col items-center justify-center min-h-screen">
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
