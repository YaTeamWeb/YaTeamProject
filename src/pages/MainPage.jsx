import React from 'react';
import { About, Clients, Hero } from '../components/index.jsx';

const MainPage = () => {
	return (
		<div>
			<Hero />
			<About />
			<Clients />
			{/*<ul className="flex items-center justify-center">
				<li>
					<SvgIcon className="fill-primary" name={'speed'} size={40} />
				</li>
				<li>
					<SvgIcon name={'medal'} size={40} />
				</li>
				<li>
					<SvgIcon name={'design'} size={40} />
				</li>
			</ul>*/}
		</div>
	);
};

export default MainPage;
