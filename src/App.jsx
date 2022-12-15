import React, { useState } from 'react';
import MainPage from './pages/MainPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackTop, Header } from './components/index.jsx';
import GrowingCircleAnimation from './components/DarkMode/GrowingCircleAnimation.jsx';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<BrowserRouter>
			<GrowingCircleAnimation isDark={darkMode} />
			<Header setDarkMode={setDarkMode} darkMode={darkMode} />
			<main className="App subpixel-antialiased">
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</main>
			<BackTop className="fixed bottom-3 right-3" />
		</BrowserRouter>
	);
}

export default App;
