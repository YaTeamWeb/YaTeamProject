import React, { useEffect } from 'react';
import MainPage from './pages/MainPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackTop, Header } from './components/index.jsx';
import { selectTheme } from './store/slices/theme/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './store/slices/theme/index.js';
import GrowingCircleAnimation from './components/DarkMode/GrowingCircleAnimation.jsx';

function App() {
	const isDark = useSelector(selectTheme);
	const dispatch = useDispatch();
	useEffect(() => {
		const html = document.querySelector('html');
		if (JSON.parse(localStorage.getItem('theme')) === true) {
			html.classList.add('dark');
		}
	}, []);

	return (
		<BrowserRouter>
			<GrowingCircleAnimation isDark={isDark} />
			<Header
				setDarkMode={(theme) => dispatch(setTheme(theme))}
				darkMode={isDark}
			/>
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
