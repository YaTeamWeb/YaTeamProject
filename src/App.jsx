import React, { useEffect, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { BackTop, Footer, Header, Preloader } from './components/index.jsx';
import { selectTheme } from './store/slices/theme/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './store/slices/theme/index.js';
import GrowingCircleAnimation from './components/DarkMode/GrowingCircleAnimation.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
const MainPage = React.lazy(() => import('./pages/MainPage.jsx'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage.jsx'));
const ProjectInfoPage = React.lazy(() => import('./pages/ProjectInfoPage.jsx'));


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
	offset: 0,
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
		const html = document.querySelector('html');
		if (JSON.parse(localStorage.getItem('theme')) === true) {
			html.classList.add('dark');
		}
	}, []);
	return (
		<HashRouter>
			<GrowingCircleAnimation isDark={isDark} />
			<main className="App subpixel-antialiased w-full">
				<Header
					setDarkMode={(theme) => dispatch(setTheme(theme))}
					darkMode={isDark}
				/>
				<Suspense fallback={<Preloader />}>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/portfolio" element={<PortfolioPage />} />
						<Route path="/portfolio/:projectId" element={<ProjectInfoPage />} />
					</Routes>
				</Suspense>
			</main>
			<Footer />
			<BackTop className="fixed bottom-3 right-3" />
		</HashRouter>
	);
}

export default App;
