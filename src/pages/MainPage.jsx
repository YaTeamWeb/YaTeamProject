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
			<Contact />
		</>
	);
};

export default MainPage;
