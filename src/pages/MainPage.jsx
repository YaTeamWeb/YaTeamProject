import React from 'react';

import {
	About,
	Benefits,
	Clients,
	Counts,
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
			<Counts />
		</>
	);
};

export default MainPage;
