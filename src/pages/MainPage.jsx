import React from 'react';
import {
	About,
	Benefits,
	Clients,
	CTA,
	Hero,
	Portfolio,
	Services,
} from '../components/index.jsx';

const MainPage = () => {
	return (
		<>
			<Hero />
			<About />
			<Clients />
			<Benefits />
			<Services />
			<CTA />
			<Portfolio />
		</>
	);
};

export default MainPage;
