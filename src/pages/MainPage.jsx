import React from 'react';
import { SvgIcon } from '../components/UI/index.jsx';
import { AnotherComponent } from '../components/index.jsx';

const MainPage = () => {
	return (
		<div>
			{/*Уберите AnotherComponent и стили у App*/}
			<AnotherComponent />
			<ul className="flex items-center justify-center">
				<li>
					<SvgIcon className="fill-primary" name={'speed'} size={40} />
				</li>
				<li>
					<SvgIcon name={'medal'} size={40} />
				</li>
				<li>
					<SvgIcon name={'design'} size={40} />
				</li>
			</ul>
		</div>
	);
};

export default MainPage;
