import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackTop, Header } from './components/index.jsx';
import { selectTheme } from './store/slices/theme/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './store/slices/theme/index.js';
import GrowingCircleAnimation from './components/DarkMode/GrowingCircleAnimation.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import MainPage from './pages/MainPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';

AOS.init({
	// Global settings:
	disable: false,
	startEvent: 'load',
	initClassName: 'aos-init',
	animatedClassName: 'aos-animate',
	useClassNames: false,
	disableMutationObserver: false,
	debounceDelay: 50,
	throttleDelay: 200,
	offset: 400,
	delay: 0,
	duration: 1000,
	easing: 'ease-in-out',
	once: true,
	mirror: false,
	anchorPlacement: 'top-bottom',
});

function App() {
	const isDark = useSelector(selectTheme);
	const dispatch = useDispatch();
	useEffect(() => {
		console.log();
		window.onload;
		const html = document.querySelector('html');
		if (JSON.parse(localStorage.getItem('theme')) === true) {
			html.classList.add('dark');
		}
	}, []);
	return (
		<BrowserRouter>
			<GrowingCircleAnimation isDark={isDark} />
			<main className="App subpixel-antialiased">
				<Routes>
					<Route path="/" element={
						<>
							<Header
								setDarkMode={(theme) => dispatch(setTheme(theme))}
								darkMode={isDark}
								page='main'
							/>
							<MainPage />
						</>
					}
					/>
					<Route path="/portfolio" element={
						<>
							<Header
								setDarkMode={(theme) => dispatch(setTheme(theme))}
								darkMode={isDark}
								page='portfolio'
							/>
							<PortfolioPage />
						</>
					} 
					/>
				</Routes>
			</main>
			<BackTop className="fixed bottom-3 right-3" />
		</BrowserRouter>
	);
}

export default App;
