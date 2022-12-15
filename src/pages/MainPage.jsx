import React from 'react';
import {
	About,
	Benefits,
	Clients,
	Hero,
	Services,
	CTA,
	Portfolio,
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
