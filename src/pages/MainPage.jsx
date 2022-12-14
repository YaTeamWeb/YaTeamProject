import React from 'react';
import {
	About,
	Benefits,
	Clients,
	Hero,
	Services,
	CTA,
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
		</>
	);
};

export default MainPage;