import React from 'react';
import ContentLoader from 'react-content-loader';

export const ServicesSkeleton = () => {
	return (
		<section className="container py-16">
			<ContentLoader
				speed={2}
				width={1240}
				height={872}
				viewBox="0 0 1240 872"
				backgroundColor="#050505"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="0" rx="15" ry="15" width="90" height="28" />
				<rect x="100" y="14" rx="15" ry="15" width="120" height="2" />
				<rect x="0" y="48" rx="15" ry="15" width="834" height="60" />
				<rect x="0" y="130" rx="15" ry="15" width="399" height="361" />
				<rect x="0" y="130" rx="15" ry="15" width="399" height="361" />
				<rect x="412" y="130" rx="15" ry="15" width="399" height="361" />
				<rect x="824" y="130" rx="15" ry="15" width="399" height="361" />
				<rect x="0" y="511" rx="15" ry="15" width="399" height="361" />
				<rect x="412" y="511" rx="15" ry="15" width="399" height="361" />
				<rect x="824" y="511" rx="15" ry="15" width="399" height="361" />
			</ContentLoader>
		</section>
	);
};
