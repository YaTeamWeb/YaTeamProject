import React from 'react';
import ContentLoader from 'react-content-loader';

export const BenefitsSkeleton = () => {
	return (
		<section className="container py-16">
			<ContentLoader
				speed={2}
				width={1240}
				height={674}
				viewBox="0 0 1240 674"
				backgroundColor="#050505"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="0" rx="15" ry="15" width="147" height="28" />
				<rect x="157" y="14" rx="15" ry="15" width="120" height="2" />
				<rect x="0" y="48" rx="15" ry="15" width="834" height="60" />
				<rect x="0" y="128" rx="15" ry="15" width="775" height="546" />
				<rect x="831" y="128" rx="15" ry="15" width="51" height="51" />
				<rect x="902" y="128" rx="15" ry="15" width="323" height="32" />
				<rect x="902" y="170" rx="15" ry="15" width="323" height="40" />
				<rect x="831" y="250" rx="15" ry="15" width="51" height="51" />
				<rect x="902" y="250" rx="15" ry="15" width="323" height="32" />
				<rect x="902" y="292" rx="15" ry="15" width="323" height="40" />
				<rect x="831" y="372" rx="15" ry="15" width="51" height="51" />
				<rect x="902" y="372" rx="15" ry="15" width="323" height="32" />
				<rect x="902" y="414" rx="15" ry="15" width="323" height="40" />
			</ContentLoader>
		</section>
	);
};
