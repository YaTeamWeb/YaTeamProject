import React from 'react';

import {
	About,
	Benefits,
	Clients,
	CTA,
	Hero,
	Portfolio,
	Services,
	Counts,
	Team,
	Contact,
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
			<Team />
			<Contact />
		</>
	);
};

export default MainPage;
