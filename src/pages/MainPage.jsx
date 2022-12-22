import React from 'react';

import {
	About,
	Benefits,
	Clients,
	Contact,
	Counts,
	CTA,
	Hero,
	Portfolio,
	Services,
	Team,
} from '../components/index.jsx';

const MainPage = () => {
	return (
		<div id="Scroll">
			<Hero />
			<About />
			<Clients />
			<Benefits />
			<Services />
			<CTA />
			<Portfolio />
			<Counts />
			<Team />
			{/*<Contact />*/}
		</div>
	);
};

export default MainPage;
