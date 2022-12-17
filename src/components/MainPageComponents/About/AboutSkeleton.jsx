import React from 'react';
import ContentLoader from 'react-content-loader';

export const AboutSkeleton = () => {
	return (
		<section className="py-24 flex justify-between container">
			<ContentLoader
				speed={2}
				width={1240}
				height={832}
				viewBox="0 0 1240 832"
				backgroundColor="#050505 "
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="0" rx="15" ry="15" width="650" height="120" />
				<rect x="0" y="164" rx="15" ry="15" width="650" height="64" />
				<rect x="0" y="238" rx="5" ry="5" width="32" height="32" />
				<rect x="42" y="238" rx="15" ry="15" width="351" height="32" />
				<rect x="0" y="280" rx="5" ry="5" width="32" height="32" />
				<rect x="42" y="280" rx="15" ry="15" width="351" height="32" />
				<rect x="0" y="322" rx="5" ry="5" width="32" height="32" />
				<rect x="42" y="322" rx="15" ry="15" width="351" height="32" />
				<rect x="0" y="374" rx="15" ry="15" width="650" height="64" />
				<rect x="675" y="0" rx="15" ry="15" width="565" height="832" />
			</ContentLoader>
		</section>
	);
};
