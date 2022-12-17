import React from 'react';
import ContentLoader from 'react-content-loader';

export const ClientsSkeleton = () => {
	return (
		<section className={'container py-16'}>
			<ContentLoader
				speed={2}
				width={1240}
				height={236}
				viewBox="0 0 1240 236"
				backgroundColor="#050505"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="0" rx="15" ry="15" width="87" height="28" />
				<rect x="97" y="14" rx="15" ry="15" width="120" height="2" />
				<rect x="0" y="48" rx="15" ry="15" width="834" height="60" />
				<rect x="0" y="148" rx="15" ry="15" width="172" height="48" />
				<rect x="310" y="148" rx="15" ry="15" width="172" height="48" />
				<rect x="620" y="148" rx="15" ry="15" width="172" height="48" />
				<rect x="930" y="148" rx="15" ry="15" width="172" height="48" />
				<rect x="572" y="216" rx="100" ry="100" width="16" height="16" />
				<rect x="593" y="216" rx="100" ry="100" width="16" height="16" />
				<rect x="614" y="216" rx="100" ry="100" width="16" height="16" />
			</ContentLoader>
		</section>
	);
};
