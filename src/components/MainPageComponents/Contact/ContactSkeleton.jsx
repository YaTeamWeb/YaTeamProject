import React from 'react';
import ContentLoader from 'react-content-loader';

export const ContactSkeleton = () => {
	return (
		<section className="container py-16">
			<ContentLoader
				speed={2}
				width={1240}
				height={1179}
				viewBox="0 0 1240 1179"
				backgroundColor="#050505"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="0" rx="15" ry="15" width="114" height="28" />
				<rect x="124" y="14" rx="15" ry="15" width="120" height="2" />
				<rect x="0" y="48" rx="15" ry="15" width="834" height="60" />
				<rect x="0" y="148" rx="15" ry="15" width="590" height="358" />
				<rect x="185" y="538" rx="15" ry="15" width="220" height="32" />
				<rect x="650" y="148" rx="15" ry="15" width="590" height="358" />
				<rect x="835" y="538" rx="15" ry="15" width="220" height="32" />
				<rect x="0" y="610" rx="15" ry="15" width="590" height="358" />
				<rect x="185" y="1000" rx="15" ry="15" width="220" height="32" />
				<rect x="650" y="610" rx="15" ry="15" width="590" height="358" />
				<rect x="835" y="1000" rx="15" ry="15" width="220" height="32" />
				<rect x="492" y="1072" rx="15" ry="15" width="255" height="43" />
			</ContentLoader>
		</section>
	);
};
