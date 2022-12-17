import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	AboutSkeleton,
	BackTop,
	BenefitsSkeleton,
	ClientsSkeleton,
	CountsSkeleton,
	CtaSkeleton,
	Header,
	PortfolioSkeleton,
	ServicesSkeleton,
} from './components/index.jsx';
import { selectTheme } from './store/slices/theme/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './store/slices/theme/index.js';
import GrowingCircleAnimation from './components/DarkMode/GrowingCircleAnimation.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSkeleton from './components/MainPageComponents/Hero/HeroSkeleton.jsx';

const MainPage = lazy(() => import('./pages/MainPage.jsx'));

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
			<Header
				setDarkMode={(theme) => dispatch(setTheme(theme))}
				darkMode={isDark}
			/>
			<main className="App subpixel-antialiased">
				<Routes>
					<Route
						path="/"
						element={
							<Suspense
								fallback={
									<>
										<HeroSkeleton />
										<AboutSkeleton />
										<ClientsSkeleton />
										<BenefitsSkeleton />
										<ServicesSkeleton />
										<CtaSkeleton />
										<PortfolioSkeleton />
										<CountsSkeleton />
									</>
								}
							>
								<MainPage />
							</Suspense>
						}
					/>
				</Routes>
			</main>
			<BackTop className="fixed bottom-3 right-3" />
		</BrowserRouter>
	);
}

export default App;
