import React, { useEffect } from 'react';
import MainPage from './pages/MainPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackTop, Header } from './components/index.jsx';
import { selectTheme } from './store/slices/theme/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './store/slices/theme/index.js';
import GrowingCircleAnimation from './components/DarkMode/GrowingCircleAnimation.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'load', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 200, // the delay on throttle used while scrolling the page (advanced)
	
  
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 400, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 1000, // values from 0 to 3000, with step 50ms
	easing: 'ease-in-out', // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
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
